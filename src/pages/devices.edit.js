import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';
import { devices } from '../devices';
import { set } from '../lib/helpers';

const baseFields = { 
    enabled: { name: 'Разрешить', type: 'checkbox', var: 'enabled' },
    name: { name: 'Имя', type: 'string' },
};

const getFormConfig = (type) => {
    const device = devices.find(d => d.value === parseInt(type));
    if (!device) return null;

    const dataAcquisitionForm = device.fields.data ? {
        name: 'Получение данных',
        configs: {
            send1: { name: 'Отправить на контроллер 1', type: 'checkbox', var: 'TaskDeviceSendData[0]', if: 'controllers[0].enabled' },
            send2: { name: 'Отправить на контроллер 2', type: 'checkbox', var: 'TaskDeviceSendData[1]', if: 'controllers[1].enabled' },
            send3: { name: 'Отправить на контроллер 3', type: 'checkbox', var: 'TaskDeviceSendData[2]', if: 'controllers[2].enabled' },
            idx1: { name: 'IDX1', type: 'number', var: 'TaskDeviceID[0]', if: 'controllers[0].enabled' },
            idx2: { name: 'IDX2', type: 'number', var: 'TaskDeviceID[1]', if: 'controllers[1].enabled' },
            idx3: { name: 'IDX3', type: 'number', var: 'TaskDeviceID[2]', if: 'controllers[2].enabled' },
            interval: { name: 'Интервал', type: 'number', var: 'interval' },
        }
    }: {};
       
    return {
        groups: {
            settings: {
                name: 'Настройки устройства',
                configs: {
                    device: { name: 'Устройство', type: 'select', var: 'device', options: devices },
                    ...baseFields,
                    
                }
            },
            ...device.fields,
            data: dataAcquisitionForm,
            values: {
                name: 'Значения',
                configs: {
                    ...[...new Array(device.fields.vals || 0)].reduce((acc, x, i) => {
                        acc[`value${i}`] = [
                            { name: `Name ${i+1}`, var: `settings.values[${i}].name`, type: 'string' }, 
                            { name: `Formula ${i+1}`, var: `settings.values[${i}].formula`, type: 'string' },
                            { name: `Decimals ${i+1}`, var: `extra.decimals[${i}]`, type: 'number' }
                        ];
                        return acc;
                    }, {})
                }
            }
        },
    }
}

const setDefaultConfig = (type, config) => {
    const device = devices.find(d => d.value === parseInt(type));
    Object.keys(device.fields).forEach((groupKey) => {
        const group = device.fields[groupKey];
        if (!group.configs) return;
        Object.keys(group.configs).forEach((configKey) => {
            const cfg = group.configs[configKey];
            const key = cfg.var || `${groupKey}.${configKey}`;
            let val = 0;
            if (cfg.type === 'string') val = '';
            else if (cfg.type === 'ip') val = [0, 0, 0, 0];
            set(config, key, val);
        });
    });
    if (device.fields.defaults) {
        const defaultConfig = device.fields.defaults();
        Object.keys(defaultConfig).forEach(key => {
            const val = defaultConfig[key];
            set(config, key, val);    
        })
    }
    
}

// todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 
export class DevicesEditPage extends Component {
    constructor(props) {
        super(props);

        this.config = settings.get(`tasks[${props.params[0]}]`);
        this.state = {
            device: this.config.device,
        }
    }

    render(props) {
        const formConfig = getFormConfig(this.state.device);
        if (!formConfig) {
            alert('Что-то пошло не так, не могу редактировать устройство');
            window.location.href='#devices';
        }
        formConfig.groups.settings.configs.device.onChange = (e) => {
            this.setState({ device: e.currentTarget.value });
            setDefaultConfig(e.currentTarget.value, this.config);
        };
        formConfig.onSave = (values) => {
            settings.set(`tasks[${props.params[0]}]`, values);
            window.location.href='#devices';
        }
        return (
            <Form config={formConfig} selected={this.config} />
        );
    }
}
