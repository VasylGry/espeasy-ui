import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';

const logLevelOptions = [
    { name: 'Нет', value: 0 },
    { name: 'Ошибки', value: 1 },
    { name: 'Инфо', value: 2 },
    { name: 'Отладка', value: 3 },
    { name: 'Отладка расшир.', value: 4 },
    { name: 'Отладка разрабт.', value: 9 },
];

const formConfig = {
    onSave: (vals) => { console.log(vals); },
    groups: {
        rules: {
            name: 'Настройки правил',
            configs: {
                enabled: { name: 'Разрешить', type: 'checkbox' },
                oldengine: { name: 'Предид. версия', type: 'checkbox' },
            }
        },
        mqtt: {
            name: 'Настройки контроллера MQTT',
            configs: {
                retain_flag: { name: 'MQTT Retain Msg', type: 'checkbox' },
                interval: { name: 'Message Interval', type: 'number' },
                useunitname: { name: 'MQTT use unit name as ClientId', type: 'checkbox' },
                changeclientid: { name: 'MQTT change ClientId at reconnect', type: 'checkbox' },
            }
        },
        ntp: {
            name: 'Настройки NTP',
            configs: {
                enabled: { name: 'Использовать NTP', type: 'checkbox' },
                host: { name: 'NTP имя хоста', type: 'string' },
            }
        },
        dst: {
            name: 'Настройки DST',
            configs: {
                enabled: { name: 'Использовать DST', type: 'checkbox' },
            }
        },
        location: {
            name: 'Настройки локализации',
            configs: {
                long: { name: 'Долгота', type: 'number' },
                lat: { name: 'Широта', type: 'number' },
            }
        },
        log: {
            name: 'Настройки протоколирования',
            configs: {
                syslog_ip: { name: 'Syslog IP', type: 'ip' },
                syslog_level: { name: 'Syslog Level', type: 'select', options: logLevelOptions },
                syslog_facility: { name: 'Syslog Level', type: 'select', options: [
                    { name: 'Kernel', value: 0 },
                    { name: 'User', value: 1 },
                    { name: 'Daemon', value: 3 },
                    { name: 'Message', value: 5 },
                    { name: 'Local0', value: 16 },
                    { name: 'Local1', value: 17 },
                    { name: 'Local2', value: 18 },
                    { name: 'Local3', value: 19 },
                    { name: 'Local4', value: 20 },
                    { name: 'Local5', value: 21 },
                    { name: 'Local6', value: 22 },
                    { name: 'Local7', value: 23 },
                ] },
                serial_level: { name: 'Уровень послед. порта', type: 'select', options: logLevelOptions },
                web_level: { name: 'Уровень Web', type: 'select', options: logLevelOptions },
            }
        },
        serial: {
            name: 'Настройки последовательного порта',
            configs: {
                enabled: { name: 'Разрешить послед. порт', type: 'checkbox' },
                baudrate: { name: 'Скорость передачи', type: 'number' },
            }
        },
        experimental: {
            name: 'Экспериментальные настройки',
            configs: {
                ip_octet: { name: 'Fixed IP Octet', type: 'number' },
                WDI2CAddress: { name: 'WD I2C Address', type: 'number' },
                ssdp: { name: 'Use SSDP', type: 'checkbox', var: 'ssdp.enabled' },
                ConnectionFailuresThreshold: { name: 'Connection Failiure Treshold', type: 'number' },
                WireClockStretchLimit: { name: 'I2C ClockStretchLimit', type: 'number' },
            }
        }
    },
}

export class ConfigAdvancedPage extends Component {
    render(props) {
        formConfig.onSave = (values) => {
            settings.set('config', values);
            window.location.href='#devices';
        }
        return (
            <Form config={formConfig} selected={settings.get('config')} />
        );
    }
}
