import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesome } from './font-awesome';
@NgModule({
    declarations: [
        FontAwesome
    ],
    imports: [ CommonModule ],
    exports: [
        FontAwesome
    ]
})
export class FontAwesomeModule {}