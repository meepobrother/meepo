import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VIEWS } from './view';
import { NavTabsModule } from '../components';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        ...VIEWS
    ],
    imports: [CommonModule, NavTabsModule, FormsModule],
    exports: [
        ...VIEWS
    ],
    providers: [],
    entryComponents: [
        ...VIEWS
    ]
})
export class DesignModule { }