import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderClass } from './order-class';
import { ShareModule } from '../../../share';
import { OrderClassAdd } from './order-class-add';
import { OrderClassAddService } from './order-class-add.service';
@NgModule({
    declarations: [
        OrderClass,
        OrderClassAdd
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        OrderClass
    ],
    providers: [
        OrderClassAddService
    ],
    entryComponents: [
        OrderClassAdd
    ]
})
export class OrderClassModule { }