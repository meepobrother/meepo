import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesComponent } from './styles';
import { IconfontSelect } from './iconfont-select';
import { FontAwesomeSelect } from './font-awesome-select';


@NgModule({
    declarations: [
        StylesComponent,
        IconfontSelect,
        FontAwesomeSelect
    ],
    imports: [CommonModule],
    exports: [
        StylesComponent,
        IconfontSelect,
        FontAwesomeSelect
    ],
    providers: [],
    entryComponents: [
        IconfontSelect,
        FontAwesomeSelect
    ]
})
export class StylesModule { }