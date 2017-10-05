import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderClass } from './order-class';
import { ShareModule } from '../../../share';

@NgModule({
    declarations: [
        OrderClass
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        OrderClass
    ],
    providers: [],
})
export class OrderClassModule { }