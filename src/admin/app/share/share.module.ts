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

import { QuillModule } from 'ngx-quill';

import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DesignModule } from '../design';
import { AppEffectsModule, AppStoreModule } from '../ngrx';
import { CoreModule } from '../core';
const materials = [
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
    DesignModule, MeepoDialogModule,
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
        UploaderBtns
    ],
    exports: [
        ...materials,
        DndModule,
        UploaderBtns
    ]
})
export class ShareModule { }

