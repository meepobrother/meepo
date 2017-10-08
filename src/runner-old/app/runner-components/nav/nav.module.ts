import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav.component";
import {SwiperDefaultModule} from "../swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    SwiperDefaultModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ]
})
export class RunnerNavModule { }
