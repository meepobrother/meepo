import { Component, OnInit } from '@angular/core';
import { SidebarContainerService } from './sidebar/sidebar-container.service';
import { DropdownsService } from './dropdown/dropdowns.service';
@Component({
    selector: 'admin-root',
    templateUrl: './admin.component.html',
    styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
    constructor(
        public sidebar$: SidebarContainerService,
        public dropdowns$: DropdownsService
    ) { }
    ngOnInit() { }

    onItem(e) {
        console.log(e);
    }

    openSidebar() {
        this.sidebar$.toogle();
    }

    onContentClick(){
        this.dropdowns$.dropdowns.forEach(res=>{
            res.close();
        })
    }
}

