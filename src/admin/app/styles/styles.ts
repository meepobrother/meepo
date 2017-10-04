import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'styles',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./styles.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StylesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}