import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouchContainer } from './touch-container';
import { TouchContent } from './touch-content';

import { TouchService } from './touch.service';

const components = [
    TouchContainer,
    TouchContent
];
const directive = [];

const services = [
    TouchService
];

const modules = [
    CommonModule
];
@NgModule({
    declarations: [
        ...components,
        ...directive
    ],
    imports: [
        ...modules
    ],
    exports: [
        ...components,
        ...directive
    ],
    providers: [
        ...services
    ],
    entryComponents: [
        TouchContent
    ]
})
export class TouchModule {}
