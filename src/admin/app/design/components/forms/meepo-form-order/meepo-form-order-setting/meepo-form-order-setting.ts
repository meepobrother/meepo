import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormOrderDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';

@Component({
    selector: 'meepo-form-order-setting',
    templateUrl: './meepo-form-order-setting.html',
    styleUrls: ['./meepo-form-order-setting.scss']
})
export class MeepoFormOrderSetting implements OnInit {
    classes: any[] = [];
    @Input() widget: MeepoFormOrderDefault = new MeepoFormOrderDefault();
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList(){
        this.api.mpost('orders.getListOrderClass',{page: 1, psize: 30}).subscribe((res: any)=>{
            this.classes = res.info;
        });
    }
}