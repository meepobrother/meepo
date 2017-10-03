import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    BootstrapModule, AnimateCssModule,
    FontAwesomeModule, AdminPageModule,
    HWrapperModule, SidebarModule
} from '@meepo/admin';

const modules = [
    BootstrapModule, AnimateCssModule, FontAwesomeModule,
    AdminPageModule, HWrapperModule, SidebarModule
];

@NgModule({
    declarations: [],
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ],
    providers: [],
})
export class CoreModule { }

