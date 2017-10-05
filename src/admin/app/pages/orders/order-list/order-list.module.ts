import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderList } from './order-list';
import { ShareModule } from '../../../share';
@NgModule({
    declarations: [
        OrderList
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        OrderList
    ],
    providers: [],
})
export class OrderListModule { }