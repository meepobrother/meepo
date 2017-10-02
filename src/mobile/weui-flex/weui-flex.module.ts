import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiFlex, WeuiFlexItem } from './weui-flex';
const components = [
    WeuiFlex,
    WeuiFlexItem
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
export class WeuiFlexModule {}
