import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachTeacherRoutingModule } from './coach-teacher-routing.module';
import { CoachTeacherComponent } from './coach-teacher.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {ServicesListModule} from "../../services/services-list/services-list.module";
import {CoachTeacherService} from "services-components";
import {CoachListModule} from "../coach-list/coach-list.module";
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    CoachTeacherRoutingModule,
    EditBtnModule,
    SwiperDefaultModule,
    ServicesListModule,
    FeedTabModule,
    CoachListModule
  ],
  declarations: [CoachTeacherComponent],
  providers: [CoachTeacherService,CoachLogService]
})
export class CoachTeacherModule { }
