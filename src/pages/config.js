import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';

const ipBlockLevel = [
    { name: 'Резрешить все', value: 0 },
    { name: 'Резрешить локальную подсеть', value: 1 },
    { name: 'Резрешить IP диапазон', value: 2 },
]

const formConfig = {
    groups: {
        general: {
            name: 'Основная',
            configs: {
                unitname: { name: 'Имя устройства', type: 'string' },
                unitnr: { name: '№ устройстваа', type: 'number' },
                appendunit: { name: 'Добавить № к имени устройства', type: 'checkbox' },
                password: { name: 'Пароль администратора', type: 'password', var: 'security[0].password' },
            }
        },
        wifi: {
            name: 'WiFi',
            configs: {
                ssid: { name: 'SSID', type: 'string', var: 'security[0].WifiSSID' },
                passwd: { name: 'Пароль', type: 'password', var: 'security[0].WifiKey' },
                fallbackssid: { name: 'Резервный SSID', type: 'string', var: 'security[0].WifiSSID2' },
                fallbackpasswd: { name: 'Резервный пароль', type: 'password', var: 'security[0].WifiKey2' },
                wpaapmode: { name: 'WPA AP Mode Key:', type: 'string', var: 'security[0].WifiAPKey' },
            }
        },
        clientIP: {
            name: 'Клиент IP фильтрация',
            configs: {
                blocklevel: { name: 'Уровень IP блокировки', type: 'select', options: ipBlockLevel, var: 'security[0].IPblockLevel' },
                lowerrange: { name: 'Диапазон IP нижняя граница', type: 'ip', var: 'security[0].AllowedIPrangeLow' },
                upperrange: { name: 'Диапазон IP верхняя граница', type: 'ip', var: 'security[0].AllowedIPrangeHigh' },
            }
        },
        IP: {
            name: 'Установки IP',
            configs: {
                ip: { name: 'IP адрес', type: 'ip' },
                gw: { name: 'Шлюз', type: 'ip' },
                subnet: { name: 'Подсеть', type: 'ip' },
                dns: { name: 'DNS', type: 'ip' },
            }
        },
        sleep: {
            name: 'Режим энергосбережения(ЭС)',
            configs: {
                awaketime: { name: 'Время выхода из режима ЭС', type: 'number' },
                sleeptime: { name: 'Период ЭС', type: 'number' },
                sleeponfailiure: { name: 'ЭС при сбое подключения', type: 'checkbox' },
            }
        }
    },
}

export class ConfigPage extends Component {
    render(props) {
        formConfig.onSave = (values) => {
            settings.set(`config`, values);
            window.location.href='#devices';
        }
        const config = settings.get('config');
        return (
            <Form config={formConfig} selected={config} />
        );
    }
}
