import { pins } from './_defs';


export const pcf8591 = {
    defaults: () => ({
        'settings.values[0].name': 'Аналог',
    }),
    sensor: {
        name: 'Датчик',
        configs: {
            port: { name: 'Порт', type: 'number', var: 'gpio4' },
        }
    },
    data: true,
    vars: 1
}
