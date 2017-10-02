import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiAgree } from './weui-agree';
const components = [
    WeuiAgree
];
@NgModule({
    declarations: [
        ...components
    ],
    imports: [ CommonModule ],
    exports: [
        ...components
    ],
    providers: [],
})
export class WeuiAgreeModule {}
