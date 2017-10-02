import { NgModule } from '@angular/core';
import {
    MdToolbarModule,
    MdSidenavModule
} from '@angular/material';

const materials = [
    MdToolbarModule,
    MdSidenavModule
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

