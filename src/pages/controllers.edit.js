import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';
import { set } from '../lib/helpers';
import { EspEaspP2PComponent } from '../components/espeasy_p2p';

export const protocols = [
    { name: '- Автономный -', value: 0 },
    { name: 'Domoticz HTTP', value: 1 },
    { name: 'Domoticz MQTT', value: 2 },
    { name: 'Nodo Telnet', value: 3 },
    { name: 'ThingSpeak', value: 4 },
    { name: 'OpenHAB MQTT', value: 5 },
    { name: 'PiDome MQTT', value: 6 },
    { name: 'Emoncms', value: 7 },
    { name: 'Общий HTTP', value: 8 },
    { name: 'FHEM HTTP', value: 9 },
    { name: 'Общий UDP', value: 10 },
    { name: 'ESPEasy P2P сеть', value: 13 },
    { name: 'Email', value: 25 },
];

const baseFields = { 
    
    dns: { name: 'Найти контроллер', type: 'select', options: [{ value: 0, name: 'Использовать IP адрес'}, { value: 1, name: 'Использовать имя хоста' }] },
    IP: { name: 'IP адрес', type: 'ip' },
    hostname: { name: 'Имя хоста', type: 'string' },
    port: { name: 'Порт', type: 'number' },
    minimal_time_between: { name: 'Минимальное время посылки', type: 'number' },
    max_queue_depth: { name: 'Максимальный размер очереди', type: 'number' },
    max_retry: { name: 'Макс. кол-во повторов', type: 'number' },
    delete_oldest: { name: 'Действия при переполнении очереди', type: 'select', options: [{ value: 0, name: 'Игнорировать новый'}, { value: 1, name: 'Удалить старый' }] },
    must_check_reply: { name: 'Проверить ответ', type: 'select', options: [{ value: 0, name: 'Игнорировать подтверждение'}, { value: 1, name: 'Проверить подтверждение' }] },
    client_timeout: { name: 'Тайм-аут клиента', type: 'number' },
};

const user = { name: 'Пользователь контроллера', type: 'string' };
const password = { name: 'Пароль контроллера', type: 'password' };
const subscribe = { name: 'Контроллер подписаться', type: 'string' };
const publish = { name: 'Контроллер опубликовать', type: 'string' };
const lwtTopicField = { MQTT_lwt_topic: { name: 'Контроллер LWT тема:', type: 'string' }, lwt_message_connect: { name: 'Сообщение LWT Connect', type: 'string' }, lwt_message_disconnect: { name: 'Сообщение LWT Disconnect', type: 'string' }, };

const baseDefaults = {
    port: 1883,
    minimal_time_between: 100,
    max_queue_depth: 10,
    max_retry: 10,
    client_timeout: 1000,
}
const getDefaults = {
    1: () => ({ // Domoticz HTTP
        port: 8080,
    }), 2: () => ({ // Domoticz MQTT
        subscribe: 'domoticz/out',
        public: 'domoticz/in'
    }), 3: () => ({ // Nodo Telnet
        port: 23,
    }), 4: () => ({ // ThingSpeak
        port: 80,
    }), 5: () => ({ // OpenHAB MQTT
        subscribe: '/%sysname%/#',
        publish: '/%sysname%/%tskname%/%valname%',
    }), 6: () => ({ // PiDome MQTT
        subscribe: '/Home/#',
        publish: '/hooks/devices/%id%/SensorData/%valname%',
    }), 7: () => ({ // Emoncms
        port: 80,
    }), 8: () => ({ // Generic HTTP
        port: 80,
        publish: 'demo.php?name=%sysname%&task=%tskname%&valuename=%valname%&value=%value%',
    }), 9: () => ({ // FHEM HTTP
        port: 8383,
    }), 10: () => ({ // Generic UDP
        port: 514,
        publish: '%sysname%_%tskname%_%valname%=%value%',
    }), 13: () => ({ // EspEasy P2P
        port: 65501,
        Custom: 1
    }), 
}

const setDefaultConfig = (type, config) => {
    const defaults = {...baseDefaults, ...getDefaults[type]()};
    Object.keys(defaults).forEach((key) => {
        const val = defaults[key];
        set(config.settings, key, val);
    });
}

const getFormConfig = (type) => {
    let additionalFields = {};
    let additionalGroups = {};
    switch (Number(type)) {
        case 2: // Domoticz MQTT
        case 5: // OpenHAB MQTT
            additionalFields = { ...baseFields, user, password, subscribe, publish, ...lwtTopicField };
            break;
        case 6: // 'PiDome MQTT'
            additionalFields = { ...baseFields, subscribe, publish, ...lwtTopicField };
            break;
        case 3: //'Nodo Telnet'
        case 7: //'Emoncms':
            additionalFields = { ...baseFields, password };
            break;
        case 8: // 'Generic HTTP'
            additionalFields = { ...baseFields, user, password, subscribe, publish };
            break;
        case 1: // Domoticz HTTP
        case 9: // 'FHEM HTTP'
            additionalFields = { ...baseFields, user, password };
            break;
        case 10: //'Generic UDP': 
            additionalFields = { ...baseFields, subscribe, publish };
            break;
        case 13: //'ESPEasy P2P Networking':
            additionalGroups = {
                global: {
                    name: 'Глобальные настройки',
                    configs: {
                        port: { name: 'UDP порт', type: 'number', var: 'ROOT.config.espnetwork.port' }
                    }
                },
                nodes: {
                    name: 'Подключенные узлы',
                    configs: {
                        nodes: { type: 'custom', component: EspEaspP2PComponent}
                    }
                } 
            }
            break;
        case 0:
        default:
            additionalFields = { ...baseFields };
    }
    
    return {
        groups: {
            settings: {
                name: 'Настройки контроллера',
                configs: {
                    protocol: { name: 'Протокол', type: 'select', var: 'protocol', options: protocols },
                    enabled: { name: 'Разрешить', type: 'checkbox', var: 'enabled' },
                    ...additionalFields
                }
            },
            ...additionalGroups
        },
    }
}


// todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 
export class ControllerEditPage extends Component {
    constructor(props) {
        super(props);

        this.config = settings.get(`controllers[${props.params[0]}]`);
        this.state = {
            protocol: this.config.protocol,
        }
    }

    render(props) {
        const formConfig = getFormConfig(this.state.protocol);
        formConfig.groups.settings.configs.protocol.onChange = (e) => {
            this.setState({ protocol: e.currentTarget.value });
            setDefaultConfig(e.currentTarget.value, this.config);
        };
        
        return (
            <Form config={formConfig} selected={this.config} />
        );
    }
}
