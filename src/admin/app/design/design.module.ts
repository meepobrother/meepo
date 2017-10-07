import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { SERVICES } from './services';

import { NavTabsModule } from '../components';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [CommonModule, NavTabsModule, FormsModule],
    exports: [
        ...COMPONENTS
    ],
    providers: [
        ...SERVICES
    ],
    entryComponents: [
        ...COMPONENTS
    ]
})
export class DesignModule { }