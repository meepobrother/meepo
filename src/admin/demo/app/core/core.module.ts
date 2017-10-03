import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FontAwesomeModule, SidebarModule
} from '@meepo/admin';

const modules = [
    FontAwesomeModule, SidebarModule
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

