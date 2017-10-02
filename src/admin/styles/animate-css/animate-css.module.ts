import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateCss } from './animate-css';
@NgModule({
    declarations: [
        AnimateCss
    ],
    imports: [ CommonModule ],
    exports: [
        AnimateCss
    ]
})
export class AnimateCssModule {}