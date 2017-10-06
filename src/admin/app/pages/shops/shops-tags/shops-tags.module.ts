import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsTags } from './shops-tags';
import { ShareModule } from '../../../share';
import { ShopsTagsService } from './shops-tags.service';
import { ShopsTagsAdd } from './shops-tags-add';

@NgModule({
    declarations: [
        ShopsTags,
        ShopsTagsAdd
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        ShopsTags,
        ShopsTagsAdd
    ],
    providers: [
        ShopsTagsService
    ],
    entryComponents: [
        ShopsTagsAdd
    ]
})
export class ShopsTagsModule { }