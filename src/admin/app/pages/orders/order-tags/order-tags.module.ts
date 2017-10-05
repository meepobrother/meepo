import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTags } from './order-tags';
import { OrderTagsAdd } from './order-tags-add';

import { ShareModule } from '../../../share';

@NgModule({
    declarations: [
        OrderTags,
        OrderTagsAdd
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        OrderTags
    ],
    providers: [],
    entryComponents: [
        OrderTagsAdd
    ]
})
export class OrderTagsModule { }