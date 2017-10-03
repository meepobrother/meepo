import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiLoading } from './weui-loading';
const components = [
    WeuiLoading
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
export class WeuiLoadingModule {}