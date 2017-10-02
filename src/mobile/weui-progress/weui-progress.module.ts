import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiProgress } from './weui-progress';
@NgModule({
    declarations: [
        WeuiProgress
    ],
    imports: [ CommonModule ],
    exports: [
        WeuiProgress
    ]
})
export class WeuiProgressModule {}
