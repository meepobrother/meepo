import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachLessonRoutingModule } from './coach-lesson-routing.module';
import { CoachLessonComponent } from './coach-lesson.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {CoachLessonService} from "services-components/src/app/coach-services/coach-lesson.service";
import {CoachListModule} from "../coach-list/coach-list.module";
import {FormsModule} from "@angular/forms";
import {DaysNavsModule} from "../../runner-components/days-navs/days-navs.module";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    CoachLessonRoutingModule,
    SwiperDefaultModule,
    EditBtnModule,
    FeedTabModule,
    CoachListModule,
      FormsModule,
      DaysNavsModule
  ],
  declarations: [CoachLessonComponent],
  providers: [CoachLessonService]
})
export class CoachLessonModule { }
