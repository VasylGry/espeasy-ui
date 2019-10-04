import { pins } from './_defs';

const modeTypes = [
    { value: 0, name: 'Низкий' }, 
    { value: 1, name: 'Изменение' }, 
    { value: 2, name: 'Передний фронт' }, 
    { value: 3, name: 'Задний фронт' }, 
]

const counterTypes = [
    { value: 0, name: 'Дельта' }, 
    { value: 1, name: 'Дельта/Сумма/Время' }, 
    { value: 2, name: 'Сумма' }, 
    { value: 3, name: 'Дельта/Сумма' }, 
]

export const genericPulse = {
    sensor: {
        defaults: () => ({
            gpio1: 255,
            'settings.values[0].name': 'Count',
            'settings.values[1].name': 'Total',
            'settings.values[2].name': 'Time',
        }),
        name: 'Sensor',
        configs: {
            gpio: { name: 'GPIO', type: 'select', options: pins, var: 'gpio1' },
            debounce: { name: 'De-bounce (ms)', type: 'number', var: 'configs[0]'  },
            counter_type: { name: 'Counter Type', type: 'select', options: counterTypes, var: 'configs[1]'  },
            mode_type: { name: 'Switch Button Type', type: 'select', options: modeTypes, var: 'configs[2]'  },
        }
    },
    data: true,
    vals: 3,
}
