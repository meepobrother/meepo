import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MeepoAppService } from './app.service';
import { ElModule } from 'element-angular';

export const ShareNewModules = [
    CommonModule,
    ElModule,
    FormsModule,
    ReactiveFormsModule
];

import { MeepoComponents } from './src';

@NgModule({
    imports: [
        ...ShareNewModules
    ],
    declarations: [
        ...MeepoComponents
    ],
    exports: [
        ...ShareNewModules,
        ...MeepoComponents
    ],
    providers: [
        MeepoAppService
    ],
    entryComponents: [
        ...MeepoComponents
    ]
})
export class MeepoModule { }

