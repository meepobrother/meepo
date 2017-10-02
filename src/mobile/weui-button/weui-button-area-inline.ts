import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'weui-btn-area-inline,[area-inline]',
    template: `
        <ng-content></ng-content>
    `
})
export class WeuiButtonAreaInline implements OnInit {
    // weui-btn-area_inline
    @HostBinding('class.weui-btn-area_inline') _inline: boolean = true;
    constructor() { }

    ngOnInit() { }
}
