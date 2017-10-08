import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperDefaultComponent } from './swiper-default.component';
import {IsEndDirective} from "../is-end.directive";
import {SlidesWaterComponent} from "./slides-water/slides-water.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SwiperDefaultComponent, IsEndDirective, SlidesWaterComponent],
  exports: [SwiperDefaultComponent]
})
export class SwiperDefaultModule { }
