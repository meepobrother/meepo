import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachLessonDetailRoutingModule } from './coach-lesson-detail-routing.module';
import { CoachLessonDetailComponent } from './coach-lesson-detail.component';
import {CoachListModule} from "../coach-list/coach-list.module";
import {DaysNavsModule} from "../../runner-components/days-navs/days-navs.module";
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";
import {MobileVerityModule} from "../../runner-components/mobile-verity/mobile-verity.module";
import {FormsModule} from "@angular/forms";
import {ActivityIndicatorModule} from '../../meepo-core/core/activity-indicator/activity-indicator.module';
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";
@NgModule({
  imports: [
    CommonModule,
    CoachLessonDetailRoutingModule,
    CoachListModule,
    SwiperDefaultModule,
    DaysNavsModule,
    TopNavModule,
    MobileVerityModule,
    FormsModule,
    ActivityIndicatorModule
  ],
  declarations: [CoachLessonDetailComponent]
})
export class CoachLessonDetailModule { }
