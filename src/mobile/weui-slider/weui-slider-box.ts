import { Component, OnInit, ContentChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { WeuiSliderHandel, WeuiSliderTrack, WeuiSliderInner, WeuiSlider } from './weui-slider-handel';

@Component({
    selector: 'weui-slider-box',
    templateUrl: './weui-slider-box.html'
})
export class WeuiSliderBox implements OnInit, AfterViewInit {

    @ContentChild(WeuiSliderHandel) sliderHandler: WeuiSliderHandel;
    @ContentChild(WeuiSlider) slider: WeuiSlider;
    @ContentChild(WeuiSliderTrack) sliderTrack: WeuiSliderTrack;
    @ContentChild(WeuiSliderInner) sliderInner: WeuiSliderInner;

    sliderLength: number;
    sliderLeft: number; // slider相对于页面的offset
    handlerStartPos = 0; // handler起始位置
    handlerStartX = 0; // handler touchstart的X
    @Input() stepWidth; // 每个step的宽度
    @Input() step: number;
    @Input() value: number = 0;

    constructor(
        public ele: ElementRef
    ) { }

    ngOnInit() {
        this.slider = this.ele.nativeElement;
    }

    ngAfterViewInit() {
        if (this.step) {
            this.stepWidth = this.sliderLength * this.step / 100;
        }
        if (this.value) {
            this.setHandler(this.sliderLength * this.value / 100);
        }
    }

    getHandlerPos() {
        let pos = this.sliderHandler.ele.nativeElement.left;

        if (/%/.test(pos)) {
            pos = this.sliderLength * parseFloat(pos) / 100;
        } else {
            pos = parseFloat(pos);
        }
        return pos;
    }

    setHandler(distance) {
        let dist, // handler的目标位置
            percent; // 所在位置的百分比

        if (this.step) {
            distance = Math.round(distance / this.stepWidth) * this.stepWidth;
        }

        dist = this.handlerStartPos + distance;
        dist = dist < 0 ? 0 : dist > this.sliderLength ? this.sliderLength : dist;

        percent = 100 * dist / this.sliderLength;

        this.sliderTrack.left = percent;
        this.sliderHandler.left = percent;
    }
}

