import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderList } from './order-list';
import { ShareModule } from '../../../share';
import { OrderListAdd } from './order-list-add';
import { DesignModule } from '../../../design';

@NgModule({
    declarations: [
        OrderList,
        OrderListAdd
    ],
    imports: [CommonModule, ShareModule, DesignModule],
    exports: [
        OrderList
    ],
    providers: [],
    entryComponents: [
        OrderListAdd
    ]
})
export class OrderListModule { }