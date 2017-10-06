import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesComponent } from './styles';
import { IconfontSelect } from './iconfont-select';
import { FontAwesomeSelect } from './font-awesome-select';
import { IconSelect } from './icon-select';
import { WebIconSelect } from './web-icon-select';

import { NavTabsModule } from '../components';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        StylesComponent,
        IconfontSelect,
        FontAwesomeSelect,
        IconSelect,
        WebIconSelect
    ],
    imports: [CommonModule, NavTabsModule, ReactiveFormsModule],
    exports: [
        StylesComponent,
        IconfontSelect,
        FontAwesomeSelect,
        IconSelect
    ],
    providers: [],
    entryComponents: [
        IconfontSelect,
        FontAwesomeSelect,
        IconSelect
    ]
})
export class StylesModule { }