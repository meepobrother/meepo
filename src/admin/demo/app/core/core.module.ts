import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    BootstrapModule, AnimateCssModule,
    FontAwesomeModule, AdminPageModule, HChatBoxModule,
    HSmallChatModule, HSidebarModule, HPageModule, HNavigationModule,
    HWrapperModule
} from '@meepo/admin';

const modules = [
    BootstrapModule, AnimateCssModule, FontAwesomeModule,
    AdminPageModule, HChatBoxModule, HSmallChatModule,
    HSidebarModule, HPageModule, HNavigationModule, HWrapperModule
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

