import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'panel',
    templateUrl: './panel.html',
    styleUrls: ['./panel.scss']
})
export class Panel implements OnInit {
    @HostBinding('class.panel') _panel: boolean = true;
    constructor() { }

    ngOnInit() { }
}

