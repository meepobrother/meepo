import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS, ComponentsService, LayoutService} from './components';
import { SERVICES } from '../share/services';

import { PriceListModule, NavTabsModule } from 'meepo-angular-ui';

import { MeepoFormFieldModule, WeuiPickerModule } from '../components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { DesignLayoutsModule } from './layouts';

import { ShopsTagsService } from '../pages/shops/shops-tags/shops-tags.service';

import { SlotDirective } from './components';
import { ShareModule } from '../share';
import { ShareSettingModule } from '../share/setting/share.setting.module';
@NgModule({
    declarations: [
        ...COMPONENTS,
        SlotDirective
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
        PriceListModule,
        ShareModule,
        ShareSettingModule
    ],
    exports: [
        ...COMPONENTS,
        DesignLayoutsModule
    ],
    providers: [
        ...SERVICES,
        ComponentsService,
        LayoutService,
        ShopsTagsService
    ],
    entryComponents: [
        ...COMPONENTS
    ]
})
export class DesignModule { }