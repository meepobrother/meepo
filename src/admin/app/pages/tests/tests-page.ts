import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core';
import { HttpClient } from '@angular/common/http';
import * as store from 'store';
import { MeepoAppService } from '../../meepo/app.service';

@Component({
    selector: 'tests-page',
    templateUrl: './tests-page.html',
    styleUrls: ['./tests-page.scss']
})
export class TestsPage implements OnInit {
    pages: any[] = [];
    constructor(
        public http: HttpClient,
        public api: ApiService,
        public app: MeepoAppService
    ) {
        this.getList();
    }

    ngOnInit() { 
        this.app.showMessage({msg: 'ngOnInit'});
        this.app.showNotification({msg: 'ngOnInit'});
        this.app.closeMessageStream.subscribe(r=>{
            console.log('close');
        });
        this.app.showAlertStream.next({
            title: '标题',
            msg: '内容'
        });
    }

    getList() {
        let url = this.api.murl('entry//open', { __do: 'cloud-state.list', m: 'imeepos_runner' }, true);
        this.http.post(url, this.api.entry({ page: 1, psize: 50 })).subscribe((res: any) => {
            this.pages = res.info;
            console.log(res);
        });
    }

    good(item: any){
        let openid = store.get('__meepo_openid');
        let url = this.api.murl('entry//open', { __do: 'cloud-state.good', m: 'imeepos_runner' }, true);
        this.http.post(url, this.api.entry({ data: item, openid: openid })).subscribe((res: any) => {
            item.good_num ++;
        });
    }
}

