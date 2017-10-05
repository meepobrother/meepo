import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'panel-body',
    template: `
        <ng-content></ng-content>
    `
})
export class PanelFooter implements OnInit {
    @HostBinding('class.panel-footer') _footer: boolean = true;
    constructor() { }

    ngOnInit() { }
}

