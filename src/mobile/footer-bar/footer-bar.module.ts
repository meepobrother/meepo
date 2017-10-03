import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBar } from './footer-bar';
import { FooterBarOutlet } from './footer-bar-outlet';
import { RouterModule } from '@angular/router';

const components = [
    FooterBar,
    FooterBarOutlet
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [CommonModule, RouterModule],
    exports: [
        ...components
    ],
    providers: [],
})
export class FooterBarModule { }
