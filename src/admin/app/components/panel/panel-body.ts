import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'panel-body',
    template: `
        <ng-content></ng-content>
    `
})
export class PanelBody implements OnInit {
    @HostBinding('class.panel-body') _body: boolean = true;
    constructor() { }

    ngOnInit() { }
}

