import { Component, OnInit, Input } from '@angular/core';
import { UuCouponDefault } from '../../../../classes';

@Component({
    selector: 'uu-coupon-setting',
    templateUrl: './uu-coupon-setting.html',
    styleUrls: ['./uu-coupon-setting.scss']
})
export class UuCouponSetting implements OnInit {
    @Input() widget: UuCouponDefault = new UuCouponDefault();
    constructor() { }

    ngOnInit() { }
}