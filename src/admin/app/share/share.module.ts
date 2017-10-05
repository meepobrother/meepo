import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTabsModule, MeepoFormFieldModule, PanelModule, AlertModule } from '../components';

import { MdDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const materials = [
    NavTabsModule,
    MeepoFormFieldModule,
    MdDialogModule,
    ReactiveFormsModule,
    PanelModule,
    AlertModule
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

