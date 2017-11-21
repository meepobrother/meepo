import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MeepoAppService } from './app.service';
import { ElModule } from 'element-angular';
import { NavTabsModule } from 'meepo-angular-ui';

export const ShareNewModules = [
    CommonModule,
    ElModule,
    FormsModule,
    ReactiveFormsModule,
    NavTabsModule
];

import { MeepoComponents } from './src';

import { MultiSelectService } from './src/multi-select/multi-select.service';

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
        MeepoAppService,
        MultiSelectService
    ],
    entryComponents: [
        ...MeepoComponents
    ]
})
export class MeepoModule { }

