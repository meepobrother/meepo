import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiSliderBox } from './weui-slider-box';
import { WeuiSliderHandel, WeuiSliderTrack, WeuiSliderInner, WeuiSlider } from './weui-slider-handel';
const components = [
    WeuiSliderHandel,
    WeuiSliderTrack,
    WeuiSliderInner,
    WeuiSlider,
    WeuiSliderBox
];
@NgModule({
    declarations: [
        ...components
    ],
    imports: [CommonModule],
    exports: [
        ...components
    ],
    providers: [],
})
export class WeuiSliderModule { }
