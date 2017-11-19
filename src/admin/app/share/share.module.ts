import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    NavTabsModule, MeepoFormFieldModule,
    PanelModule, BlankModule,
    TextAdvModule, PriceListModule, OverlayModule,
    CoverModule, ColorSelectModule, Iphone6Module,
    WeuiGridModule, MenuModule, EditorModule,
    MeepoDialogModule, WeuiPickerModule, Components
} from '../components';

import { ImageSelectDirective } from './setting';

import { SECTIONS, SECTIONS_SERVICES } from './section';
import { DIALOGS } from './dialog';


import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CoreModule } from '../core';

import { MeepoModule } from '../meepo/meepo.module';
import { SortableModule } from '../components/sortable';

const materials = [
    CommonModule,
    NavTabsModule,
    MeepoFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    PanelModule,
    FormsModule,
    BlankModule,
    TextAdvModule,
    PriceListModule,
    OverlayModule,
    CoverModule,
    ColorSelectModule,
    Iphone6Module,
    WeuiGridModule,
    MenuModule,
    EditorModule,
    MeepoDialogModule,
    WeuiPickerModule,
    CoreModule,
    MeepoModule,
    SortableModule
];

@NgModule({
    imports: [
        ...materials,
    ],
    declarations: [
        ...SECTIONS,
        ...DIALOGS,
        ImageSelectDirective,
        ...Components
    ],
    exports: [
        ...materials,
        ...SECTIONS,
        ...DIALOGS,
        ImageSelectDirective,
        ...Components
    ],
    providers: [
        ...SECTIONS_SERVICES
    ],
    entryComponents: [
        ...DIALOGS,
        ...SECTIONS
    ]
})
export class ShareModule { }

