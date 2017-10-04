import {
    Directive,
    ElementRef,
    HostBinding
} from '@angular/core';

@Directive({
    selector: '[swiperButtonPrev]',
})
export class SwiperButtonPrev {
    @HostBinding('class.swiper-button-prev') isPrev: boolean = true;
    constructor(
        public ele: ElementRef
    ) { }
}
