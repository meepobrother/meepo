import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'swiper-slide',
    templateUrl: 'swiper-slide.html'
})
export class SwiperSlide implements OnInit {
    @HostBinding('class.swiper-slide') isSlide: boolean = true;
    @HostBinding('attr.data-swiper-autoplay') autoplay: number;
    constructor() { }
    ngOnInit() {}
}

