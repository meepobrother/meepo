import { Directive, HostBinding, TemplateRef, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[weui-slider-handel]',
})
export class WeuiSliderHandel {
    @HostBinding('class.weui-slider__handler') _handel: boolean = true;
    @HostBinding('style.left.%') left: number = 0;
    constructor(
        public ele: ElementRef
    ) { }

    @HostListener('click', ['$event'])
    onClick() { }

    @HostListener('touchstart', ['$event'])
    touchstart() {

    }

    @HostListener('touchmove', ['$evnet'])
    touchmove() { }
}


@Directive({
    selector: '[weui-slider-track]',
})
export class WeuiSliderTrack {
    @HostBinding('class.weui-slider__track') _track: boolean = true;
    @HostBinding('style.left.%') left: number = 0;
    constructor(
        public ele: ElementRef
    ) { }
}


@Directive({
    selector: '[weui-slider-inner]',
})
export class WeuiSliderInner implements OnInit {
    @HostBinding('class.weui-slider__inner') _inner: boolean = true;
    width: number;
    sliderLeft: number;
    constructor(
        public ele: ElementRef
    ) { }

    ngOnInit() {
        this.width = this.ele.nativeElement.clientWidth;
        this.sliderLeft = this.ele.nativeElement.sliderLeft;
    }
}


@Directive({
    selector: '[weui-slider]',
})
export class WeuiSlider { }
