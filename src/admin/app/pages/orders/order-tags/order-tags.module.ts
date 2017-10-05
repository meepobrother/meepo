import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTags } from './order-tags';
import { OrderTagsService } from './order-tags.service';

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
    providers: [
        OrderTagsService
    ],
    entryComponents: [
        OrderTagsAdd
    ]
})
export class OrderTagsModule { }