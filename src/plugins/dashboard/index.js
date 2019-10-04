import { DashboardPage } from './dashboard';
import { DashboardEditorPage } from './dashboard.editor';

const pluginAPI = window.getPluginAPI();

const menu = { title: 'Панель', pagetitle: '', href: 'dashboard', class: 'full', component: DashboardPage, children: [
        { title: 'Редактор', pagetitle: '', href: 'dashboard/editor', class: 'full', component: DashboardEditorPage },
    ] };

pluginAPI.menu.addMenu(menu);
