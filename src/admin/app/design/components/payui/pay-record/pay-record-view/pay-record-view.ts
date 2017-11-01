import { Component, OnInit, Input } from '@angular/core';
import { PayRecordDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
import * as store from 'store';
@Component({
    selector: 'pay-record-view',
    templateUrl: './pay-record-view.html',
    styleUrls: ['./pay-record-view.scss']
})
export class PayRecordView implements OnInit {
    @Input() widget: PayRecordDefault = new PayRecordDefault();
    activeItem: any;
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.widget.children.map(res=>{
            if(res['active']){
                this.activeItem = res;
                this.getList();
            }
        });
    }

    getList() {
        let openid = store.get('__meepo_openid');
        this.activeItem['__post']['action'] = 'mylog';
        this.activeItem['__post']['openid'] = openid;
        this.api.mpost(this.activeItem['__do'], this.activeItem['__post'], 'imeepos_runner').subscribe((res: any) => {
            this.widget.logs = res.info;
        });
    }

    _onMore(item: any, index: number) { 

    }

    onTab(item: any) { 
        this.widget.children.map(res=>{
            res['active'] = false;
        })
        item['active'] = !item['active'];
        this.activeItem = item;
        this.getList();
    }
}