import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiGrid, WeuiGridIcon, WeuiGridLabel } from './weui-grid';
import { WeuiGrids } from './weui-grids';
const components = [
    WeuiGrid,
    WeuiGridIcon,
    WeuiGridLabel,
    WeuiGrids
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
export class WeuiGridModule { }
