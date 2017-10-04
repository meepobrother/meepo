import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'sidebar-content',
    templateUrl: './sidebar-content.html',
    styleUrls: ['./sidebar-content.scss']
})
export class SidebarContent implements OnInit {
    @HostBinding('style.flex') _flex: string = '10';
    constructor() { }

    ngOnInit() { }
}

