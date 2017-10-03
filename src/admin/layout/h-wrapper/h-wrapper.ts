import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'h-wrapper',
    templateUrl: './h-wrapper.html',
    styleUrls: ['./h-wrapper.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HWrapper implements OnInit {
    @HostBinding('attr.id') id: string = 'wrapper';
    constructor() { }
    ngOnInit() { }
}
