import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';

interface IndexSetting {
    advs: any[];
}

@Component({
    selector: 'page-index',
    templateUrl: './index.page.html'
})
export class IndexPage implements OnInit {
    setting: IndexSetting;
    constructor(
        public index: IndexService
    ) { }

    ngOnInit() {
        this.index.getData().subscribe((setting: IndexSetting) => {
            this.setting = setting;
        });
    }
    advs: any[] = [
        {
            title: '测试'
        },
        {
            title: '测试'
        },
        {
            title: '测试'
        }
    ];
}
