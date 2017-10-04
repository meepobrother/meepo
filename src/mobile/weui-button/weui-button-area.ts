import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'weui-btn-area,[btn-area]',
    template: `
        <ng-content></ng-content>
    `
})
export class WeuiBtnArea implements OnInit {
    // btn-area
    @HostBinding('class.weui-btn-area') _area: boolean = true;
    @HostBinding('style.display') _display: string = 'block';
    constructor() { }

    ngOnInit() { }
}
