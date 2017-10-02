import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'weui-progress',
    templateUrl: './weui-progress.html'
})
export class WeuiProgress implements OnInit {
    @HostBinding('class.weui-progress') _progress: boolean = true;
    @Input() width: number = 30;
    constructor() { }
    ngOnInit() { }
}


