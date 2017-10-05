import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderClass } from './order-class';
import { OrderTagsSelect } from './order-tags-select';

import { ShareModule } from '../../../share';
import { OrderClassAdd } from './order-class-add';
import { OrderClassAddService } from './order-class-add.service';
import { OrderTagsService } from '../order-tags';
@NgModule({
    declarations: [
        OrderClass,
        OrderClassAdd,
        OrderTagsSelect
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        OrderClass
    ],
    providers: [
        OrderClassAddService,
        OrderTagsService
    ],
    entryComponents: [
        OrderClassAdd,
        OrderTagsSelect
    ]
})
export class OrderClassModule { }