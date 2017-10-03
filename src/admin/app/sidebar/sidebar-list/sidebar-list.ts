import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
    selector: 'sidebar-list',
    templateUrl: './sidebar-list.html',
    styleUrls: ['./sidebar-list.scss'],
    providers: [
        SidebarService
    ]
})
export class SidebarList implements OnInit {
    constructor() { }

    ngOnInit() { }
}

