import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';

@Component({
    selector: 'yue-list',
    templateUrl: './yue-list.html',
    styleUrls: ['./yue-list.scss']
})
export class YueList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList() {
        this.api.mpost('tixian.yue_log', { action: 'admin', start: 0, len: 20 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }
    
}