import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NavTabsModule, MeepoFormFieldModule,
    PanelModule, AlertModule, BlankModule,
    TextAdvModule, PriceListModule, OverlayModule, CoverModule
} from '../components';

import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    CoverModule
];

@NgModule({
    imports: [
        ...materials
    ],
    exports: [
        ...materials
    ]
})
export class ShareModule { }

