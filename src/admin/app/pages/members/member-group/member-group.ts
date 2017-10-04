import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';

@Component({
    selector: 'member-group',
    templateUrl: './member-group.html',
    styleUrls: ['./member-group.scss']
})
export class MemberGroup implements OnInit {
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { 
        this.api.mget('member.group').subscribe(res=>{
            console.log(res);
        });
    }
}