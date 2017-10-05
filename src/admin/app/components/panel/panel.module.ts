import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Panel } from './panel';
import { PanelBody } from './panel-body';
import { PanelHeader } from './panel-header';
import { PanelFooter } from './panel-footer';
import { PanelDanger, PanelDefault, PanelInfo, PanelPrimary, PanelSuccess, PanelWarning } from './panel-styles';


const components = [
    PanelBody,
    PanelHeader,
    PanelFooter,
    Panel,
    PanelDanger, PanelDefault, PanelInfo,
    PanelPrimary, PanelSuccess, PanelWarning
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
export class PanelModule { }