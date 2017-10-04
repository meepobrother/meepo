import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiButton } from './weui-button';
import { WeuiButtonDefault } from './default';
import { WeuiButtonDisabled } from './disable';
import { WeuiButtonInline } from './inline';
import { WeuiButtonLoading } from './loading';
import { WeuiButtonPrimary } from './primary';
import { WeuiButtonWarn } from './warn';
import { WeuiButtonMini } from './mini';
import { WeuiBtnArea } from './weui-button-area';
import { WeuiButtonAreaInline } from './weui-button-area-inline';

import {
    WeuiButtonPlainDefault,
    WeuiButtonPlainDisabled,
    WeuiButtonPlainPrimary
} from './plain';

const directives = [
    WeuiButton,
    WeuiButtonDefault,
    WeuiButtonDisabled,
    WeuiButtonInline,
    WeuiButtonLoading,
    WeuiButtonPrimary,
    WeuiButtonWarn,
    WeuiButtonMini,
    WeuiBtnArea,
    WeuiButtonAreaInline,
    WeuiButtonPlainDefault,
    WeuiButtonPlainDisabled,
    WeuiButtonPlainPrimary
];

@NgModule({
    declarations: [
        ...directives
    ],
    imports: [ CommonModule ],
    exports: [
        ...directives
    ],
    providers: [],
})
export class WeuiButtonModule {}
