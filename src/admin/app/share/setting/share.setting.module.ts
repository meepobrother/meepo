import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SETTING_COMPONENTS } from './index';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ShareModule
    ],
    declarations: [
        ...SETTING_COMPONENTS
    ],
    exports: [
        ...SETTING_COMPONENTS
    ],
    providers: [],
    entryComponents: [
        ...SETTING_COMPONENTS
    ]
})
export class ShareSettingModule{}