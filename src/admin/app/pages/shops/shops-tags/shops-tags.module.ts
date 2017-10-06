import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsTags } from './shops-tags';
import { ShareModule } from '../../../share';
import { ShopsTagsService } from './shops-tags.service';
@NgModule({
    declarations: [
        ShopsTags
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        ShopsTags
    ],
    providers: [
        ShopsTagsService
    ],
})
export class ShopsTagsModule { }