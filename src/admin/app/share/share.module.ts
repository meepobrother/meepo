import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NavTabsModule, MeepoFormFieldModule,
    PanelModule, AlertModule, BlankModule,
    TextAdvModule, PriceListModule, OverlayModule,
    CoverModule, DndModule, ColorSelectModule, Iphone6Module,
    WeuiGridModule, MenuModule, EditorModule, LocationPickerModule,
    MeepoDialogModule, WeuiPickerModule, SelectPageDialogModule,
    NgbModule
} from '../components';

import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DesignModule } from '../design';

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
    SelectPageDialogModule,
    
];

@NgModule({
    imports: [
        ...materials,
        DndModule.forRoot(),
        NgbModule.forRoot()
    ],
    exports: [
        ...materials,
        DndModule
    ]
})
export class ShareModule { }

