import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import {SwiperDefaultModule} from "../swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    SwiperDefaultModule
  ],
  declarations: [SwiperComponent],
  exports: [SwiperComponent]
})
export class SwiperModule { }
