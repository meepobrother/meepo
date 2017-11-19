import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pay-detail-setting',
    templateUrl: './pay-detail-setting.html',
    styleUrls: ['./pay-detail-setting.scss']
})
export class PayDetailSetting implements OnInit {
    @Input() widget: any;
    constructor() { }
    ngOnInit() { }
}