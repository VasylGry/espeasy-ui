import { 
    ConfigPage, 
    DevicesPage, 
    DevicesEditPage, 
    ControllersPage, 
    ControllerEditPage, 
    ControllerNotificationsPage,
    ConfigAdvancedPage, 
    ConfigHardwarePage, 
    RebootPage, 
    LoadPage, 
    RulesPage, 
    UpdatePage, 
    ToolsPage, 
    FSPage, 
    FactoryResetPage, 
    DiscoverPage, 
    DiffPage, 
    RulesEditorPage, 
    SetupPage,
    SysVarsPage,
	TestPage
} from '../pages';

import { saveConfig } from '../conf/config.dat';
import { deleteFile } from './espeasy';

const oldUI = () => {
    deleteFile('index.htm.gz').then(() => {
        window.location.href = '/';
    });
}

class Menus {
    constructor() {
        this.menus = [];
        this.routes = [];

        this.addMenu = (menu) => {
            this.menus.push(menu);
            this.addRoute(menu);
        }

        this.addRoute = (route) => {
            this.routes.push(route);
            if (route.children) {
                route.children.forEach(child => this.routes.push(child));
            }
        }
    }
    
}

const menus = [
    { title: 'Устройства', href: 'devices', component: DevicesPage, children: [] },
    { title: 'Контроллеры', href: 'controllers', component: ControllersPage, children: [] },
    { title: 'Автоматизация', href: 'rules', component: RulesEditorPage, class: 'full', children: [] },
    { title: 'Конфигурация', href: 'config', component: ConfigPage, children: [
        { title: 'Аппаратура', href: 'config/hardware', component: ConfigHardwarePage },
        { title: 'Расширения', href: 'config/advanced', component: ConfigAdvancedPage },
        { title: 'Правила', href: 'config/rules', component: RulesPage },
        { title: 'Сохранить', href: 'config/save', action: saveConfig },
        { title: 'Загрузить', href: 'config/load', component: LoadPage },
        { title: 'Перегрузка', href: 'config/reboot', component: RebootPage },
        { title: 'Заводские настройки', href: 'config/factory', component: FactoryResetPage },
    ] },
    { title: 'Инструменты', href: 'tools', component: ToolsPage, children: [
        { title: 'Обнаружить', href: 'tools/discover', component: DiscoverPage },
        { title: 'Инфо', href: 'tools/sysinfo', component: SysVarsPage },
        { title: 'Обновить', href: 'tools/update', component: UpdatePage },
        { title: 'Файловая система', href: 'tools/fs', component: FSPage },
//        { title: 'Старое ЧМИ', href: 'tools/oldui', action: oldUI },
    ] },
	{ title: 'Test Page', href: 'test', component: TestPage, children: [] },
];

const routes = [
    { title: 'Редактировать контроллер', href:'controllers/edit', component: ControllerEditPage },
    { title: 'Редактировать сообщения', href:'controllers/notification', component: ControllerNotificationsPage },
    { title: 'Редактировать устройства', href:'devices/edit', component: DevicesEditPage },
    { title: 'Сохранить в флеш', href:'tools/diff', component: DiffPage },
    { title: 'Настройки', href: 'config/setup', component: SetupPage }
];

const menu = new Menus();
routes.forEach(menu.addRoute);
menus.forEach(menu.addMenu)

export { menu };
