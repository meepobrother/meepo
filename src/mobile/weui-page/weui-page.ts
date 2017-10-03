import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'weui-page',
    template: `
        <ng-content></ng-content>
    `,
    encapsulation: ViewEncapsulation.None
})
export class WeuiPage implements OnInit {
    constructor() { }

    ngOnInit() { }
}
