import { Component, OnInit, Input } from '@angular/core';
import { UuCouponDefault } from '../../../../classes';

@Component({
    selector: 'uu-coupon-view',
    templateUrl: './uu-coupon-view.html',
    styleUrls: ['./uu-coupon-view.scss']
})
export class UuCouponView implements OnInit {
    @Input() widget: UuCouponDefault = new UuCouponDefault();
    constructor() { }

    ngOnInit() { }
}