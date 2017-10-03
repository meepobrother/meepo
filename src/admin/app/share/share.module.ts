import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTabsModule } from '../components';

const materials = [
    NavTabsModule
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

