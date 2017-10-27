import { Component, OnInit, Input } from '@angular/core';
import { UuSwiperDefault } from '../../../../classes';
@Component({
    selector: 'uu-swiper-setting',
    templateUrl: './uu-swiper-setting.html',
    styleUrls: ['./uu-swiper-setting.scss']
})
export class UuSwiperSetting implements OnInit {
    @Input() widget: UuSwiperDefault = new UuSwiperDefault();
    constructor() { }

    ngOnInit() { }
}