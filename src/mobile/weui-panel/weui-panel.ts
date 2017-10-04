import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'weui-panel',
    template: `
        <ng-content></ng-content>
    `
})
export class WeuiPanel implements OnInit {
    @HostBinding('class.weui-panel') _panel: boolean = true;
    @HostBinding('style.display') _display: string = 'block';

    constructor() { }

    ngOnInit() { }
}

import { Directive } from '@angular/core';

@Directive({
    selector: 'panel-hd',
})
export class WeuiPanelHd {
    @HostBinding('class.weui-panel__hd') _hd: boolean = true;
    @HostBinding('style.display') _display: string = 'block';
}
