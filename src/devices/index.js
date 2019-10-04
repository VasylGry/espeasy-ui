import { inputSwitch } from './1_input_switch';
import { analogInput } from './2_analog_input';
import { genericPulse } from './3_generic_pulse';
import { ds18b20 } from './4_ds18b20';
import { dht } from './5_dht';
import { bmp085 } from './6_bmp085';
import { pcf8591 } from './7_pcf8591';
import { rfidWeigand } from './8_rfid';
import { inputMcp } from './9_io_mcp';
import { bh1750 } from './10_light_lux';
import { pme } from './11_pme';
import { lcd2004 } from './12_lcd';
import { hcsr04 } from './13_hcsr04';
import { si7021 } from './14_si7021';
import { tls2561 } from './15_tls2561';
import { pn532 } from './17_pn532';
import { dust } from './18_dust';
import { pcf8574 } from './19_pcf8574';
import { ser2net } from './20_ser2net';
import { levelControl } from './21_level_control';
import { pca9685 } from './22_pca9685';
import { oled1306 } from './23_oled1306';
import { mlx90614 } from './24_mlx90614';
import { ads1115 } from './25_ads1115';
import { systemInfo } from './26_system_info';
import { ina219 } from './27_ina219';
import { bmx280 } from './28_bmx280';
import { mqttDomoticz } from './29_mqtt_domoticz';
import { bmp280 } from './30_bmp280';
import { sht1x } from './31_sht1x';
import { ms5611 } from './32_ms5611';
import { dummyDevice } from './33_dummy_device';
import { dht12 } from './34_dht12';
import { sh1106 } from './36_sh1106';
import { mqttImport } from './37_mqtt_import';
import { neopixelBasic } from './38_neopixel_basic';
import { thermocouple } from './39_thermocouple';
import { neopixelClock } from './41_neopixel_clock';
import { neopixelCandle } from './42_neopixel_candle';
import { clock } from './43_output_clock';
import { wifiGateway } from './44_wifi_gateway';
import { mhz19 } from './49_mhz19';
import { senseAir } from './52_senseair';
import { sds011 } from './56_sds011';
import { rotaryEncoder } from './59_rotary_encoder';
import { ttp229 } from './63_ttp229';
import { ds3231 } from './157_ds3231';

export const devices = [
    { name: '- Не подключен -', value: 0, fields: [] },
    { name: 'Дискретный вход - Переключатель', value: 1, fields: inputSwitch },
    { name: 'Аналоговый вход - встроенный', value: 2, fields: analogInput },
    { name: 'Общий - Счетчик импульсов', value: 3, fields: genericPulse },
    { name: 'Окружающая среда - DS18b20', value: 4, fields: ds18b20 },
    { name: 'Окружающая среда - DHT11/12/22  SONOFF2301/7021', value: 5, fields: dht },
    { name: 'Окружающая среда - BMP085/180', value: 6, fields: bmp085 },
    { name: 'Аналоговый вход - PCF8591', value: 7, fields: pcf8591 },
    { name: 'RFID - Wiegand', value: 8, fields: rfidWeigand },
    { name: 'Дискретный вход - MCP23017', value: 9, fields: inputMcp },
    { name: 'Свет/Освещенность - BH1750', value: 10, fields: bh1750 },
    { name: 'Расширение вх.\вых. - ProMini Extender', value: 11, fields: pme },
    { name: 'Дисплей - LCD2004', value: 12, fields: lcd2004 },
    { name: 'Позиция - HC-SR04, RCW-0001, etc.', value: 13, fields: hcsr04 },
    { name: 'Окружающая среда - SI7021/HTU21D', value: 14, fields: si7021 },
    { name: 'Свет/Освещенность - TSL2561', value: 15, fields: tls2561 },
    //{ name: 'Communication - IR', value: 16, fields: bh1750 },
    { name: 'RFID - PN532', value: 17, fields: pn532 },
    { name: 'Пыль - Sharp GP2Y10', value: 18, fields: dust },
    { name: 'Дискретный вход - PCF8574', value: 19, fields: pcf8574 },
    { name: 'Куммуникации - Сервер послд. порта', value: 20, fields: ser2net },
    { name: 'Регулятор - Контроль уровня', value: 21, fields: levelControl },
    { name: 'Расширение вх.\вых. - PCA9685', value: 22, fields: pca9685 },
    { name: 'Дисплей - OLED SSD1306', value: 23, fields: oled1306 },
    { name: 'Окружающая среда - MLX90614', value: 24, fields: mlx90614 },
    { name: 'Аналоговый вход - ADS1115', value: 25, fields: ads1115 },
    { name: 'Общий - Информация о системе', value: 26, fields: systemInfo },
    { name: 'Эл. энергия (DC) - INA219', value: 27, fields: ina219 },
    { name: 'Окружающая среда - BMx280', value: 28, fields: bmx280 },
    { name: 'Выход - Domoticz MQTT Helper', value: 29, fields: mqttDomoticz },
    { name: 'Окружающая среда - BMP280', value: 30, fields: bmp280 },
    { name: 'Окружающая среда - SHT1X', value: 31, fields: sht1x },
    { name: 'Окружающая среда - MS5611 (GY-63)', value: 32, fields: ms5611 },
    { name: 'Общий - Устройство-пустышка', value: 33, fields: dummyDevice },
    { name: 'Окружающая среда - DHT12 (I2C)', value: 34, fields: dht12 },
    { name: 'Дисплей - OLED SSD1306/SH1106 Framed', value: 36, fields: sh1106 },
    { name: 'Общий - MQTT Import', value: 37, fields: mqttImport },
    { name: 'Выход - NeoPixel (Basic)', value: 38, fields: neopixelBasic },
    { name: 'Окружающая среда - Thermocouple', value: 39, fields: thermocouple },
    { name: 'Выход - NeoPixel (Word Clock)', value: 41, fields: neopixelClock },
    { name: 'Выход - NeoPixel (Candle)', value: 42, fields: neopixelCandle },
    { name: 'Выход - Часы', value: 43, fields: clock },
    { name: 'Куммуникации - P1 Wifi шлюз', value: 44, fields: wifiGateway },
    { name: 'Газы - CO2 MH-Z19', value: 49, fields: mhz19 },
    { name: 'Газы - CO2 Senseair', value: 52, fields: senseAir },
    { name: 'Пыль - SDS011/018/198', value: 56, fields: sds011 },
    { name: 'Дискретный вход - Rotary Encoder', value: 59, fields: rotaryEncoder },
    { name: 'Клавиатура - TTP229 Touc', value: 63, fields: ttp229 },
    { name: 'Часы реального времени - DS3231', value: 157, fields: ds3231 },
].sort((a, b) => a.name.localeCompare(b.name));
