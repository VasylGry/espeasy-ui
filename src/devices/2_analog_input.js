import { pins } from './_defs';

export const analogInput = {
    defaults: () => ({
        'settings.values[0].name': 'Аналог. вход',
    }),
    sensor: {
        name: 'Датчик',
        configs: {
            oversampling: { name: 'Oversampling', type: 'checkbox', var: 'configs[0]' },
        }
    },
    advanced: {
        name: 'Two point calibration',
        configs: {
            enabled: { name: 'Calibration Enabled', type: 'checkbox', var: 'configs[3]'  },
            point1: [{ name: 'Point 1', type: 'number', var: 'configs_long[0]' }, { name: '=', type: 'number', var: 'configs_float[0]' }],
            point2: [{ name: 'Point 2', type: 'number', var: 'configs_long[1]' }, { name: '=', type: 'number', var: 'configs_float[1]' }],
        }
    },
    data: true,
    vals: 1,
}
