import { pins } from './_defs';

const eventTypes = [
    { value: 0, name: 'Отключено' }, 
    { value: 1, name: 'Активируется 0' }, 
    { value: 2, name: 'Активируется 1' }, 
    { value: 3, name: 'Активируется 0 и 1' }, 
]

export const inputSwitch = {
    defaults: () => ({
        gpio1: 255,
        interval: 60,
        'configs_float[1]': 1000,
        'configs_float[2]': 1000,
        'settings.values[0].name': 'Switch',
    }),
    sensor: {
        name: 'Датчик',
        configs: {
            pullup: { name: 'Внутренняя подтяжка', type: 'checkbox', var: 'pin1pullup' },
            inversed: { name: 'Инверсная логика', type: 'checkbox', var: 'pin1inversed' },
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1' },
            switch_type: { name: 'Переключатель', type: 'select', options: [{ name: 'switch', value: 0}, { name: 'dimmer', value: 3 }], var: 'configs[0]'  },
            switch_button_type: { name: 'Тип переключателяы', type: 'select', options: [
                { name: 'норма', value: 0}, { name: 'активный 0', value: 1 }, { name: 'активный 1', value: 2 }
            ], var: 'configs[2]'  },
            send_boot_state: { name: 'Отправить состояние при загрузке', type: 'checkbox', var: 'configs[3]'  },
        }
    },
    advanced: {
        name: 'Расширенное управление событиями',
        configs: {
            debounce: { name: 'Подавление дребезга (ms)', type: 'number', var: 'configs_float[0]'  },
            dblclick: { name: 'Двойной щелчек', type: 'select', options: eventTypes, var: 'configs[4]' },
            dblclick_interval: { name: 'Двойной щелчек, макс. интервал (ms)', min: 1000, max: 3000, type: 'number', var: 'configs_float[1]' },
            longpress: { name: 'Длинное нажатие', type: 'select', options: eventTypes, var: 'configs[5]' },
            longpress_interval: { name: 'Длинное нажатие, макс. интервал (ms)', min: 1000, max: 5000, type: 'number',  var: 'configs_float[2]' },
            safe_button: { name: 'Аварийный останов', type: 'checkbox', var: 'configs_float[3]' },
        }
    },
    data: true,
    vals: 1,
}
