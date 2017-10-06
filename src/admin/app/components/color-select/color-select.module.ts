import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSelect } from './color-select';
@NgModule({
    declarations: [
        ColorSelect
    ],
    imports: [ CommonModule ],
    exports: [
        ColorSelect
    ],
    providers: [],
})
export class ColorSelectModule {}