import { h, Component } from 'preact';
import { Form } from '../components/form';
import { settings } from '../lib/settings';

export const pins = [
    { name: 'None', value: 255 },
    { name: 'GPIO-0', value: 0 },
    { name: 'GPIO-1', value: 1 },
    { name: 'GPIO-2', value: 2 },
    { name: 'GPIO-3', value: 3 },
    { name: 'GPIO-4', value: 4 },
    { name: 'GPIO-5', value: 5 },
    { name: 'GPIO-9', value: 9 },
    { name: 'GPIO-10', value: 10 },
    { name: 'GPIO-12', value: 12 },
    { name: 'GPIO-13', value: 13 },
    { name: 'GPIO-14', value: 14 },
    { name: 'GPIO-15', value: 15 },
    { name: 'GPIO-16', value: 16 }
];

const pinState = [
    { name: 'По умолчанию', value: 0 },
    { name: '0', value: 1 },
    { name: '1', value: 2 },
    { name: 'Вход', value: 3 },
];

const formConfig = {
    groups: {
        led: {
            name: 'Светодиод статуса WiFi',
            configs: {
                gpio: { name: 'GPIO --> светодиод', type: 'select', options: pins },
                inverse: { name: 'Ивертировать светодиод', type: 'checkbox' },
            }
        },
        reset: {
            name: 'Вывод сброса',
            configs: {
                pin: { name: 'GPIO <-- Switch', type: 'select', options: pins },
            }
        },
        i2c: {
            name: 'Настройки I2C',
            configs: {
                sda: { name: 'GPIO - SDA', type: 'select', options: pins },
                scl: { name: 'GPIO - SCL', type: 'select', options: pins },
            }
        },
        spi: {
            name: 'Настройки SPI',
            configs: {
                enabled: { name: 'Init SPI', type: 'checkbox' },
            }
        },
        gpio: {
            name: 'Установка GPIO при вкл. питания',
            configs: {
                0: { name: 'Pin Mode GPIO-0', type: 'select', options: pinState },
                1: { name: 'Pin Mode GPIO-1', type: 'select', options: pinState },
                2: { name: 'Pin Mode GPIO-2', type: 'select', options: pinState },
                3: { name: 'Pin Mode GPIO-3', type: 'select', options: pinState },
                4: { name: 'Pin Mode GPIO-4', type: 'select', options: pinState },
                5: { name: 'Pin Mode GPIO-5', type: 'select', options: pinState },
                9: { name: 'Pin Mode GPIO-9', type: 'select', options: pinState },
                10: { name: 'Pin Mode GPIO-10', type: 'select', options: pinState },
                12: { name: 'Pin Mode GPIO-12', type: 'select', options: pinState },
                13: { name: 'Pin Mode GPIO-13', type: 'select', options: pinState },
                14: { name: 'Pin Mode GPIO-14', type: 'select', options: pinState },
                15: { name: 'Pin Mode GPIO-15', type: 'select', options: pinState },
            }
        }
    },
}

export class ConfigHardwarePage extends Component {
    render(props) {
        const config = settings.get('hardware');
        formConfig.onSave = (values) => {
            settings.set('hardware', values);
            window.location.href='#devices';
        }

        return (
            <Form config={formConfig} selected={config} />
        );
    }
}
