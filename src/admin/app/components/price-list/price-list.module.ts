import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceList } from './price-list';
@NgModule({
    declarations: [
        PriceList
    ],
    imports: [ CommonModule ],
    exports: [
        PriceList
    ],
    providers: [],
})
export class PriceListModule {}