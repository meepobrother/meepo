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