import { Component, OnInit } from '@angular/core';
import { SidebarContainerService } from '../../sidebar/sidebar-container.service';
import { DropdownsService } from '../../dropdown/dropdowns.service';
@Component({
    selector: 'main-layout',
    templateUrl: './main-layout.html',
    styleUrls: ["./main-layout.scss"]
})
export class MainLayoutComponent implements OnInit {
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

