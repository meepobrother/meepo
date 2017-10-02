import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[swiperButtonNext]',
})
export class SwiperButtonNext {
    @HostBinding('class.swiper-button-next') isNext: boolean = true;
    constructor(
        public ele: ElementRef
    ) { }
}
