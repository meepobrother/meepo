import { Component, OnInit, Input } from '@angular/core';
import { HmBannerDefault } from '../../../../classes';
@Component({
    selector: 'hm-banner-view',
    templateUrl: './hm-banner-view.html',
    styleUrls: ['./hm-banner-view.scss']
})
export class HmBannerView implements OnInit {
    @Input() widget: HmBannerDefault = new HmBannerDefault();
    constructor() { }

    ngOnInit() { }
}