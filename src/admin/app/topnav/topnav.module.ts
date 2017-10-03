import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topnav } from './topnav';
import { TopnavLeft } from './topnav-left/topnav-left';
import { TopnavRight } from './topnav-right/topnav-right';
import { FlexLayoutModule } from '@angular/flex-layout';
const components = [
    Topnav,
    TopnavLeft,
    TopnavRight
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [ CommonModule, FlexLayoutModule ],
    exports: [
        ...components
    ],
    providers: [],
})
export class TopnavModule {}