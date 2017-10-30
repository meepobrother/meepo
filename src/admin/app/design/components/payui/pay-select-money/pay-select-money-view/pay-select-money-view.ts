import { Component, OnInit, Input } from '@angular/core';
import { PaySelectMoneyDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
import * as store from 'store';
@Component({
    selector: 'pay-select-money-view',
    templateUrl: './pay-select-money-view.html',
    styleUrls: ['./pay-select-money-view.scss']
})
export class PaySelectMoneyView implements OnInit {
    @Input() widget: PaySelectMoneyDefault = new PaySelectMoneyDefault();

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