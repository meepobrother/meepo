import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTabsModule, MeepoFormFieldModule } from '../components';

const materials = [
    NavTabsModule,
    MeepoFormFieldModule
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

