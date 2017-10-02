import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdButtonModule, MdButtonToggleModule,
    MdSliderModule, MdMenuModule
} from '@angular/material';

const materials = [
    MdButtonModule, MdButtonToggleModule,
    MdSliderModule, MdMenuModule
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

