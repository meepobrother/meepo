import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
    {
        path: 'dates',
        loadChildren: 'app/pages/dates#DatesPageModule'
    },
    {
        path: 'goods',
        loadChildren: 'app/pages/goods#GoodsPageModule'
    },
    {
        path: 'moneys',
        loadChildren: 'app/pages/moneys#MoneysPageModule'
    },
    {
        path: 'members',
        loadChildren: 'app/pages/members#MembersPageModule'
    },
    {
        path: 'orders',
        loadChildren: 'app/pages/orders#OrdersPageModule'
    },
    {
        path: 'plugins',
        loadChildren: 'app/pages/plugins#PluginsPageModule'
    },
    {
        path: 'settings',
        loadChildren: 'app/pages/settings#SettingsPageModule'
    },
    {
        path: 'shops',
        loadChildren: 'app/pages/shops#ShopsPageModule'
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