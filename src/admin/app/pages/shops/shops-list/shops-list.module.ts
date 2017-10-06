import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsList } from './shops-list';
import { ShareModule } from '../../../share';
import { ShopsListService } from './shops-list.service';
@NgModule({
    declarations: [
        ShopsList
    ],
    imports: [ CommonModule, ShareModule ],
    exports: [
        ShopsList
    ],
    providers: [
        ShopsListService
    ],
})
export class ShopsListModule {}