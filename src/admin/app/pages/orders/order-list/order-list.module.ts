import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderList } from './order-list';
import { ShareModule } from '../../../share';
import { OrderListAdd } from './order-list-add';

@NgModule({
    declarations: [
        OrderList,
        OrderListAdd
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        OrderList
    ],
    providers: [],
    entryComponents: [
        OrderListAdd
    ]
})
export class OrderListModule { }