import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrdersPage } from './orders-page';
const routes: Routes = [
    {
        path: '',
        component: OrdersPage
    }
];
import { ShareModule } from '../../share';
import { OrderClassModule } from './order-class';
import { OrderListModule } from './order-list';
import { OrderTagsModule } from './order-tags';

const modules = [
    ShareModule,
    OrderClassModule,
    OrderListModule,
    OrderTagsModule
];

@NgModule({
    declarations: [
        OrdersPage
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...modules],
    exports: [],
    providers: [],
})
export class OrdersPageModule { }
