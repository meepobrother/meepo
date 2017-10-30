import { Component, OnInit, Input } from '@angular/core';
import { PayRecordDefault } from '../../../../classes';
@Component({
    selector: 'pay-record-view',
    templateUrl: './pay-record-view.html',
    styleUrls: ['./pay-record-view.scss']
})
export class PayRecordView implements OnInit {
    @Input() widget: PayRecordDefault = new PayRecordDefault();
    constructor() { }

    ngOnInit() { }

    _onMore(item: any, index: number){}

    onTab(item: any){}
}