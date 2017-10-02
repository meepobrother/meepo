import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number';
@NgModule({
    declarations: [
        NumberComponent
    ],
    imports: [ CommonModule ],
    exports: [
        NumberComponent
    ],
    providers: [],
})
export class NumberModule {}
