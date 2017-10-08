import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS, ComponentsService } from './components';
import { SERVICES } from './services';

import { NavTabsModule } from '../components';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { DesignLayoutsModule } from './layouts';

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule, 
        NavTabsModule, 
        FormsModule, 
        DesignLayoutsModule,
        MatDialogModule
    ],
    exports: [
        ...COMPONENTS,
        DesignLayoutsModule
    ],
    providers: [
        ...SERVICES,
        ComponentsService
    ],
    entryComponents: [
        ...COMPONENTS
    ]
})
export class DesignModule { }