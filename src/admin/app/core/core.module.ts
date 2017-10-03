import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SidebarModule
} from '../sidebar/sidebar.module';

const modules = [
    SidebarModule
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

