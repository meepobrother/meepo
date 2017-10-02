import { NgModule } from '@angular/core';
import { AdminHeader } from './header';
import { MdToolbarModule } from '@angular/material';
@NgModule({
    imports: [
        MdToolbarModule
    ],
    exports: [
        AdminHeader
    ],
    declarations: [
        AdminHeader
    ]
})
export class AdminHeaderModule{}