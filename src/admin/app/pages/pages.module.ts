import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { IsLoginGuard } from './pages.guards';
const routes:Routes = [
    {
        path: '',
        redirectTo: 'members',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: 'app/pages/login/login-page.module#LoginPageModule'
    },
    {
        path: 'dates',
        loadChildren: 'app/pages/dates/dates-page.module#DatesPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'goods',
        loadChildren: 'app/pages/goods/goods-page.module#GoodsPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'moneys',
        loadChildren: 'app/pages/moneys/moneys-page.module#MoneysPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'members',
        loadChildren: 'app/pages/members/members-page.module#MembersPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'orders',
        loadChildren: 'app/pages/orders/orders-page.module#OrdersPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'plugins',
        loadChildren: 'app/pages/plugins/plugins-page.module#PluginsPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'settings',
        loadChildren: 'app/pages/settings/settings-page.module#SettingsPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'shops',
        loadChildren: 'app/pages/shops/shops-page.module#ShopsPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'tasks',
        loadChildren: 'app/pages/tasks/tasks-page.module#TasksPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'skills',
        loadChildren: 'app/pages/skills/skills-page.module#SkillsPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'themes',
        loadChildren: 'app/pages/themes/themes-page.module#ThemesPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'themes/design/:id',
        loadChildren: 'app/pages/themes-design/themes-design.module#ThemesDesignModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'themes/preview/:id',
        loadChildren: 'app/pages/themes-preview/themes-preview.module#ThemesPreviewModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'coachs',
        loadChildren: 'app/pages/coachs/coachs-page.module#CoachsPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'tests',
        loadChildren: 'app/pages/tests/tests-page.module#TestsPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'manager',
        loadChildren: 'app/pages/manager/manager-page.module#ManagerPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'topics',
        loadChildren: 'app/pages/topics/topics-page.module#TopicsPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'actives',
        loadChildren: 'app/pages/actives/actives-page.module#ActivesPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'lessons',
        loadChildren: 'app/pages/lessons/lessons-page.module#LessonsPageModule',
        canActivate: [IsLoginGuard]
    },
    {
        path: 'cloud',
        loadChildren: 'app/pages/cloud/cloud-page.module#CloudPageModule',
        canActivate: [IsLoginGuard]
    }
];
@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(routes) ],
    exports: [
        RouterModule
    ],
    providers: [
        IsLoginGuard
    ],
})
export class PagesModule {}