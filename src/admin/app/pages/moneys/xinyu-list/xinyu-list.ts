import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';

@Component({
    selector: 'xinyu-list',
    templateUrl: './xinyu-list.html',
    styleUrls: ['./xinyu-list.scss']
})
export class XinyuList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService
    ) { }


    ngOnInit() { 
        this.getList();
    }

    getList() {
        this.api.mpost('tixian.xinyu_log', { action: 'admin', start: 0, len: 20 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }
}