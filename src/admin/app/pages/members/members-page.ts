import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../core';
import * as store from 'store';
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

    clearCache(){
        store.set('isLogin',false);
    }
}

