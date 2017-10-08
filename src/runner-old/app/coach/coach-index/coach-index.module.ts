import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachIndexRoutingModule } from './coach-index-routing.module';
import { CoachIndexComponent } from './coach-index.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {ShopsListModule} from "../../shops/shops-list/shops-list.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    CoachIndexRoutingModule,
    SwiperDefaultModule,
    EditBtnModule,
    ShopsListModule
  ],
  declarations: [CoachIndexComponent]
})
export class CoachIndexModule { }
