import { Component, OnInit, Input } from '@angular/core';
import { PaySelectMoneyDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
import * as store from 'store';

@Component({
    selector: 'add-money-view',
    templateUrl: './add-money-view.html',
    styleUrls: ['./add-money-view.scss']
})
export class AddMoneyViewComponent implements OnInit {
    @Input() widget: AddMoneyDefault = new AddMoneyDefault();

    activeItem: any;
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }

    pay() {
        if (this.activeItem) {
            let openid = store.get('__meepo_openid');
            this.api.mpost('tixian.post', { openid: openid, tixian: this.activeItem }).subscribe(res=>{
                console.log(res);
            });
        }
    }

    _onItem(item: any) {
        this.widget.children.map(res => {
            res['active'] = false;
        });
        item['active'] = !item['active'];
        this.activeItem = item;
        this.activeItem['value'] = item['money'];
    }
}

export class AddMoneyDefault{
    children: any[] = [];
    items: any[] = [];

    tip: string;
    btn: string;
    payDesc: string;
    payTitle: string;

    constructor(){
        this.tip = '';
        this.btn = '提交';
        this.payDesc = '请选择添加的金额';
        this.payTitle = '添加佣金';
    }
}