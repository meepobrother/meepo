import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS, ComponentsService, LayoutService} from './components';
import { SERVICES } from './services';

import { NavTabsModule, MeepoFormFieldModule, WeuiPickerModule, PriceListModule } from '../components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
        MatDialogModule,
        MeepoFormFieldModule,
        ReactiveFormsModule,
        WeuiPickerModule,
        PriceListModule
    ],
    exports: [
        ...COMPONENTS,
        DesignLayoutsModule
    ],
    providers: [
        ...SERVICES,
        ComponentsService,
        LayoutService
    ],
    entryComponents: [
        ...COMPONENTS
    ]
})
export class DesignModule { }