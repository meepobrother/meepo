import { Component, OnInit, HostBinding } from '@angular/core';
import { SidebarContainerService } from './sidebar-container.service';
@Component({
    selector: 'sidebar-container',
    templateUrl: './sidebar-container.html',
    styleUrls: ['./sidebar-container.scss']
})
export class SidebarContainer implements OnInit {
    @HostBinding('style.width') _width: string = '220px';

    constructor(
        public service$: SidebarContainerService
    ) { }
    ngOnInit() {
        this.service$.onOpen.subscribe(res => {
            this._width = res;
        })
    }
}