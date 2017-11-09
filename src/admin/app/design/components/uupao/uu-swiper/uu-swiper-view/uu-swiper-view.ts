import { Component, OnInit, Input } from '@angular/core';
import { UuSwiperDefault } from '../../../../classes';

@Component({
    selector: 'uu-swiper-view',
    templateUrl: './uu-swiper-view.html',
    styleUrls: ['./uu-swiper-view.scss']
})
export class UuSwiperView implements OnInit {
    @Input() widget: UuSwiperDefault = new UuSwiperDefault();
    constructor() { }
    ngOnInit() { }
}