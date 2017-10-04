import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiDialog } from './weui-dialog';

import { DialogHdPlaceholder, DialogBdPlaceholder, DialogFtPlaceholder } from './weui-dialog-placeholder';
import { DialogTitle, DialogBtn, DialogBtnDefault, DialogBtnPrimary } from './weui-dialog-style';
import { DialogBodyContainer, DialogFooterContainer, DialogHeaderContainer } from './weui-dialog-container';
import { DialogBodyDef, DialogFooterDef, DialogHeaderDef } from './weui-dialog-def';

const directives = [
    DialogHdPlaceholder,
    DialogBdPlaceholder,
    DialogFtPlaceholder,
    DialogTitle,
    DialogBtn,
    DialogBtnDefault,
    DialogBtnPrimary,
    DialogBodyDef,
    DialogFooterDef,
    DialogHeaderDef
];

const components = [
    WeuiDialog,
    DialogBodyContainer,
    DialogFooterContainer,
    DialogHeaderContainer
];

@NgModule({
    declarations: [
        ...components,
        ...directives
    ],
    imports: [CommonModule],
    exports: [
        ...components,
        ...directives
    ],
    providers: []
})
export class WeuiDialogModule { }

