import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesComponent } from './styles';
import { IconfontSelect } from './iconfont-select';
import { FontAwesomeSelect } from './font-awesome-select';
import { IconSelect } from './icon-select';

import { NavTabsModule } from '../components';




@NgModule({
    declarations: [
        StylesComponent,
        IconfontSelect,
        FontAwesomeSelect,
        IconSelect
    ],
    imports: [CommonModule,NavTabsModule],
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