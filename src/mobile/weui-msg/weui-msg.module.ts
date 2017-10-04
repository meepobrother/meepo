import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    WeuiMsg,
    WeuiMsgExtraArea,
    WeuiMsgIconArea,
    WeuiMsgOprArea,
    WeuiMsgTextArea,
    WeuiMsgDesc,
    WeuiMsgTitle
} from './weui-msg';

const components = [
    WeuiMsg,
    WeuiMsgExtraArea,
    WeuiMsgIconArea,
    WeuiMsgOprArea,
    WeuiMsgTextArea,
    WeuiMsgDesc,
    WeuiMsgTitle
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
export class WeuiMsgModule {}
