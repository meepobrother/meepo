import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    WeuiMediaBox,
    WeuiMediaBoxAppmsgInfo,
    WeuiMediaBoxDesc,
    WeuiMediaBoxInfo,
    WeuiMediaBoxInfoMetaExtraInfo,
    WeuiMediaBoxInfoMetaInfo,
    WeuiMediaBoxSmallAppmsgInfo,
    WeuiMediaBoxText,
    WeuiMediaBoxTitle,
    WeuiMediaBoxBd,
    WeuiMediaBoxHd,
    WeuiMediaBoxThumb
} from './weui-media-box';

const components = [
    WeuiMediaBox,
    WeuiMediaBoxAppmsgInfo,
    WeuiMediaBoxDesc,
    WeuiMediaBoxInfo,
    WeuiMediaBoxInfoMetaExtraInfo,
    WeuiMediaBoxInfoMetaInfo,
    WeuiMediaBoxSmallAppmsgInfo,
    WeuiMediaBoxText,
    WeuiMediaBoxTitle,
    WeuiMediaBoxBd,
    WeuiMediaBoxHd,
    WeuiMediaBoxThumb
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
export class WeuiMediaBoxModule { }
