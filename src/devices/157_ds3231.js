
export const ds3231 = {
    defaults: () => ({
        interval: 5,
        'settings.values[0].name': 'Температура',
        'settings.values[1].name': 'Количество тиков',
    }),
    sensor: {
        name: 'NTP сервер',
        configs: {
        	send_boot_state: { name: 'Разрешить синхронизацию с NTP при загрузке', type: 'checkbox', var: 'configs[0]'  },
        }
    },
    data: true,
    vals: 2,
}
