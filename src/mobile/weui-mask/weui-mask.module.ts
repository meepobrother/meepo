import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiMask } from './weui-mask';
@NgModule({
    declarations: [
        WeuiMask
    ],
    imports: [ CommonModule ],
    exports: [
        WeuiMask
    ],
    providers: [],
})
export class WeuiMaskModule {}
