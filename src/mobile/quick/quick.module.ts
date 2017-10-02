import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickMenu } from './quick-menu';
import { QuickItemOutlet } from './quick-item-outlet';

const components = [
    QuickMenu,
    QuickItemOutlet
];
@NgModule({
    declarations: [
        ...components
    ],
    imports: [ CommonModule ],
    exports: [
        ...components
    ],
    providers: [],
})
export class QuickModule {}
