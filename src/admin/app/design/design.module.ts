import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { SERVICES } from './services';

import { NavTabsModule } from '../components';
import { FormsModule } from '@angular/forms';
import { DesignLayoutsModule } from './layouts';

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule, 
        NavTabsModule, 
        FormsModule, 
        DesignLayoutsModule
    ],
    exports: [
        ...COMPONENTS,
        DesignLayoutsModule
    ],
    providers: [
        ...SERVICES
    ],
    entryComponents: [
        ...COMPONENTS
    ]
})
export class DesignModule { }