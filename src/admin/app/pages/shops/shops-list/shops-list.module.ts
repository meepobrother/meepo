import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsList } from './shops-list';
@NgModule({
    declarations: [
        ShopsList
    ],
    imports: [ CommonModule ],
    exports: [
        ShopsList
    ],
    providers: [],
})
export class ShopsListModule {}