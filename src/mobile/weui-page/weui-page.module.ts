import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiPage } from './weui-page';

const modules = [];
const components = [
    WeuiPage
];
const directives = [];

@NgModule({
    declarations: [
        ...components,
        ...directives
    ],
    imports: [
        CommonModule,
        ...modules
    ],
    exports: [
        ...components,
        ...directives
    ],
    providers: [],
})
export class WeuiPageModule { }
