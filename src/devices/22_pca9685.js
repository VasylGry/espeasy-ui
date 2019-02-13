import { pins, getTasks, getTaskValues } from './_defs';

const mode = [...Array(32)].map((v, i) => ({ value: i, name: `0x${i.toString(16)} (${i})` }));
const i2c_address = [...Array(32)].map((v, i) => ({ value: i+64, name: `0x${(i+64).toString(16)} (${i+64})` }));

export const pca9685 = {
    sensor: {
        name: 'Sensor',
        configs: {
            i2c_address: { name: 'I2C Address', type: 'select', options: i2c_address, var: 'configs[0]'  },
            mode: { name: 'Mode 2', type: 'select', options: mode, var: 'configs[1]'  },
            frequency: { name: 'Frequency (23 - 1500)', type: 'number', var: 'configs_float[0]' },
            range: { name: 'Range (1-10000)', type: 'number', var: 'configs_float[1]' },
        }
    },
}