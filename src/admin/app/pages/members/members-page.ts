import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../core';
@Component({
    selector: 'members-page',
    templateUrl: './members-page.html',
    styleUrls: ['./members-page.scss']
})
export class MembersPage implements OnInit {
    constructor(
        public site: SiteService
    ) { }

    ngOnInit() { 
    }
}

