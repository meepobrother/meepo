import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsList } from './shops-list';
import { ShareModule } from '../../../share';
import { ShopsListService } from './shops-list.service';
import { ShopsListAdd } from './shops-list-add';
@NgModule({
    declarations: [
        ShopsList,
        ShopsListAdd
    ],
    imports: [ CommonModule, ShareModule ],
    exports: [
        ShopsList,
        ShopsListAdd
    ],
    providers: [
        ShopsListService
    ],
    entryComponents: [
        ShopsListAdd
    ]
})
export class ShopsListModule {}