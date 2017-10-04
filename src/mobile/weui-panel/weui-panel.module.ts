import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    WeuiPanel,
    WeuiPanelHd
} from './weui-panel';

const components = [
    WeuiPanel,
    WeuiPanelHd
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [CommonModule],
    exports: [
        ...components
    ],
    providers: [],
})
export class WeuiPanelModule { }
