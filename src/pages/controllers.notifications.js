import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';
import { set } from '../lib/helpers';
import { pins } from '../devices/_defs';

export const types = [
    { name: '- Нет -', value: 0 },
    { name: 'Email', value: 1 },
    { name: 'Звонок', value: 2 },
];

const baseDefaults = {}
const getDefaults = {
    0: () => ({}),
    1: () => ({ // Email
    }), 2: () => ({ // Buzzer
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
    switch (Number(type)) {
        case 1: // Email
            additionalFields = { 
                domain: { name: 'Домен', type: 'string' },
                hostname: { name: 'Имя хоста', type: 'string' },
                port: { name: 'Порт', type: 'number' },
                sender: { name: 'Отправитель', type: 'string' },
                receiver: { name: 'Получатель', type: 'string' },
                subject: { name: 'Тема', type: 'string' },
                user: { name: 'Имя пользователя', type: 'string' },
                pass: { name: 'Пароль', type: 'string' },
                body: { name: 'Содержание', type: 'textarea' },
            };
            break;
        case 2: // Buzzer
            additionalFields = { 
                pin1: { name: '1st GPIO', type: 'select', options: pins }
             };
            break;
    }
    
    return {
        groups: {
            settings: {
                name: 'Настройки уведомлений',
                configs: {
                    type: { name: 'Тип', type: 'select', var: 'type', options: types },
                    enabled: { name: 'Разрешить', type: 'checkbox', var: 'enabled' },
                    ...additionalFields
                }
            },
        },
    }
}


// todo: changing protocol needs to update:
// -- back to default (correct default)
// -- field list 
export class ControllerNotificationsPage extends Component {
    constructor(props) {
        super(props);

        this.config = settings.get(`notifications[${props.params[0]}]`);
        this.state = {
            type: this.config.type,
        }
    }

    render(props) {
        const formConfig = getFormConfig(this.state.type);
        formConfig.groups.settings.configs.type.onChange = (e) => {
            this.setState({ type: e.currentTarget.value });
            setDefaultConfig(e.currentTarget.value, this.config);
        };
        formConfig.onSave = (values) => {
            settings.set(`notifications[${props.params[0]}]`, values);
            window.location.href='#controllers';
        }
        
        return (
            <Form config={formConfig} selected={this.config} />
        );
    }
}
