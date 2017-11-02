import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NavTabsModule, MeepoFormFieldModule,
    PanelModule, AlertModule, BlankModule,
    TextAdvModule, PriceListModule, OverlayModule,
    CoverModule, DndModule, ColorSelectModule, Iphone6Module,
    WeuiGridModule, MenuModule, EditorModule, LocationPickerModule,
    MeepoDialogModule, WeuiPickerModule, UploaderBtns
} from '../components';

import { SECTIONS, SECTIONS_SERVICES } from './section';
import { DIALOGS } from './dialog';


import { QuillModule } from 'ngx-quill';

import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppEffectsModule, AppStoreModule } from '../ngrx';
import { CoreModule } from '../core';

const materials = [
    CommonModule,
    NavTabsModule,
    MeepoFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    PanelModule,
    AlertModule,
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
    EditorModule, LocationPickerModule,
    MeepoDialogModule,
    WeuiPickerModule,
    CoreModule,
    QuillModule
];

@NgModule({
    imports: [
        ...materials,
        DndModule.forRoot()
    ],
    declarations: [
        UploaderBtns,
        ...SECTIONS,
        ...DIALOGS
    ],
    exports: [
        ...materials,
        DndModule,
        UploaderBtns,
        ...SECTIONS,
        ...DIALOGS
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

