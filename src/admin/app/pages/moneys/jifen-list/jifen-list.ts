import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
@Component({
    selector: 'jifen-list',
    templateUrl: './jifen-list.html',
    styleUrls: ['./jifen-list.scss']
})
export class JifenList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList() {
        this.api.mpost('tixian.jifen_log', { action: 'admin', start: 0, len: 20 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }
}
