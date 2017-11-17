import { Component, OnInit, Input } from '@angular/core';
import { HmBannerDefault } from '../../../../classes';

@Component({
    selector: 'hm-banner-setting',
    templateUrl: './hm-banner-setting.html',
    styleUrls: ['./hm-banner-setting.scss']
})
export class HmBannerSetting implements OnInit {
    @Input() widget: HmBannerDefault = new HmBannerDefault();
    
    constructor() { }

    ngOnInit() { }
}