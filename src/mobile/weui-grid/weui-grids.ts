import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'weui-grids',
    template: `
        <ng-content></ng-content>
    `
})
export class WeuiGrids implements OnInit {
    @HostBinding('class.weui-grids') _grids: boolean = true;
    @HostBinding('style.display') _display: string = 'block';
    constructor() { }

    ngOnInit() { }
}
