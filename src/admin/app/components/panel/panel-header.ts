import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'panel-body',
    template: `
        <ng-content></ng-content>
    `
})
export class PanelHeader implements OnInit {
    @HostBinding('class.panel-heading') _heading: boolean = true;
    constructor() { }

    ngOnInit() { }
}

