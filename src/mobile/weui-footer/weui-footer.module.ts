import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    WeuiFooter,
    WeuiFooterFixed,
    WeuiFooterLinks,
    WeuiFooterLink,
    WeuiFooterText
} from './weui-footer';

const components = [
    WeuiFooter,
    WeuiFooterFixed,
    WeuiFooterLinks,
    WeuiFooterLink,
    WeuiFooterText
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
export class WeuiFooterModule { }
