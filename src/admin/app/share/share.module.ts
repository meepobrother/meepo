import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NavTabsModule, MeepoFormFieldModule,
    PanelModule, AlertModule, BlankModule
} from '../components';

import { MdDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const materials = [
    NavTabsModule,
    MeepoFormFieldModule,
    MdDialogModule,
    ReactiveFormsModule,
    PanelModule,
    AlertModule,
    FormsModule,
    BlankModule
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

