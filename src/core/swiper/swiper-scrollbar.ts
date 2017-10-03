import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[swiperScrollbar]',
})
export class SwiperScrollbar {
    @HostBinding('class.swiper-scrollbar') scrollbar: boolean = true;
    constructor(public ele: ElementRef) { }
}
