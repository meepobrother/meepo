import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesComponent } from './styles';
import { IconfontSelect } from './iconfont-select';

@NgModule({
    declarations: [
        StylesComponent,
        IconfontSelect
    ],
    imports: [ CommonModule ],
    exports: [
        StylesComponent,
        IconfontSelect
    ],
    providers: [],
    entryComponents: [
        IconfontSelect
    ]
})
export class StylesModule {}