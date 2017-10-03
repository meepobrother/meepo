import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
    {
        path: 'dates',
        loadChildren: 'app/pages/dates/dates-page.module#DatesPageModule'
    },
    {
        path: 'goods',
        loadChildren: 'app/pages/goods/goods-page.module#GoodsPageModule'
    },
    {
        path: 'moneys',
        loadChildren: 'app/pages/moneys/moneys-page.module#MoneysPageModule'
    },
    {
        path: 'members',
        loadChildren: 'app/pages/members/members-page.module#MembersPageModule'
    },
    {
        path: 'orders',
        loadChildren: 'app/pages/orders/orders-page.module#OrdersPageModule'
    },
    {
        path: 'plugins',
        loadChildren: 'app/pages/plugins/plugins-page.module#PluginsPageModule'
    },
    {
        path: 'settings',
        loadChildren: 'app/pages/settings/settings-page.module#SettingsPageModule'
    },
    {
        path: 'shops',
        loadChildren: 'app/pages/shops/shops-page.module#ShopsPageModule'
    }
];
@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(routes) ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class PagesModule {}