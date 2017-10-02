import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HPage } from './h-page';
@NgModule({
    declarations: [
        HPage
    ],
    imports: [ CommonModule ],
    exports: [
        HPage
    ],
    providers: [],
})
export class HPageModule {}