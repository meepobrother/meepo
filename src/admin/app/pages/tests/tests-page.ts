import { Component, OnInit, SkipSelf } from '@angular/core';
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
    app: MeepoAppService;

    videos: any[] = [
        {
            title: '跑腿lesson1-v20登陆步骤',
            src: 'https://meepo.com.cn/meepo/video/001.mp4'
        }
    ];
    constructor(
        public http: HttpClient,
        public api: ApiService,
        
    ) {
        this.getList();
        this.app = MeepoAppService.api;
    }

    ngOnInit() {
        // this.app.showMessage({ msg: 'ngOnInit' });
        // this.app.showNotification({ msg: 'ngOnInit' });
        // this.app.closeMessageStream.subscribe(r => {
        //     console.log('close');
        // });
        // this.app.showAlertStream.next({
        //     visible: true,
        //     title: '标题',
        //     msg: '内容'
        // });
    }

    getList() {
        let url = this.api.murl('entry//open', { __do: 'cloud-state.list', m: 'imeepos_runner' }, true);
        this.http.post(url, this.api.entry({ page: 1, psize: 50 })).subscribe((res: any) => {
            this.pages = res.info;
        });
    }

    good(item: any) {
        let openid = store.get('__meepo_openid');
        let url = this.api.murl('entry//open', { __do: 'cloud-state.good', m: 'imeepos_runner' }, true);
        this.http.post(url, this.api.entry({ data: item, openid: openid })).subscribe((res: any) => {
            item.good_num++;
        });
    }
}

