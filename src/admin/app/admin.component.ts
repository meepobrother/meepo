import { Component, OnInit } from '@angular/core';
import { SidebarContainerService } from './sidebar/sidebar-container.service';
@Component({
    selector: 'admin-root',
    templateUrl: './admin.component.html',
    styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
    constructor(
        public service$: SidebarContainerService
    ) { }
    ngOnInit() { }

    onItem(e) {
        console.log(e);
    }

    openSidebar() {
        this.service$.fxHide = !this.service$.fxHide;
    }
}

