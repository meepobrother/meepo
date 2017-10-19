import { Component, OnInit, Input } from '@angular/core';
import { MeepoSwiperTags } from '../../../../classes';

@Component({
    selector: 'meepo-swiper-tags-setting',
    templateUrl: './meepo-swiper-tags-setting.html',
    styleUrls: ['./meepo-swiper-tags-setting.scss']
})
export class MeepoSwiperTagsSetting implements OnInit {
    @Input() widget: MeepoSwiperTags = new MeepoSwiperTags();
    constructor() { }

    ngOnInit() { }
}