import { Component, OnInit, Input } from '@angular/core';
import { PayRecordDefault } from '../../../../classes';

@Component({
    selector: 'pay-record-setting',
    templateUrl: './pay-record-setting.html',
    styleUrls: ['./pay-record-setting.scss']
})
export class PayRecordSetting implements OnInit {
    @Input() widget: PayRecordDefault = new PayRecordDefault();
    constructor() { }

    ngOnInit() { }

    setDefault(item: any) {
        this.widget.children.map(res=>{
            res['active'] = false;
        });
        item['active'] = true;
    }
}
