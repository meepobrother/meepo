import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachSeatTagComponent } from './coach-seat-tag/coach-seat-tag.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";
import { CoachSeatTimeTagComponent } from './coach-seat-time-tag/coach-seat-time-tag.component';
import { CoachDayTagComponent } from './coach-day-tag/coach-day-tag.component';
import { CoachAdvsComponent } from './coach-advs/coach-advs.component';
import {UploaderModule} from "../../runner-components/uploader/uploader.module";
import { CoachTeacherTagComponent } from './coach-teacher-tag/coach-teacher-tag.component';
import {CoachSeatClassComponent} from "./coach-seat-class/coach-seat-class.component";
import {CoachTeacherTimeTagComponent} from "./coach-teacher-time-tag/coach-teacher-time-tag.component";
import { CoachLessonTagComponent } from './coach-lesson-tag/coach-lesson-tag.component';
import { CoachHomeListComponent } from './coach-home-list/coach-home-list.component';
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
    FormsModule,
    SwiperDefaultModule,
    UploaderModule,
    FeedTabModule
  ],
  declarations: [CoachSeatTagComponent, CoachSeatTimeTagComponent, CoachDayTagComponent, CoachAdvsComponent, CoachTeacherTagComponent,CoachSeatClassComponent,CoachTeacherTimeTagComponent, CoachLessonTagComponent, CoachHomeListComponent],
  exports: [CoachSeatTagComponent,CoachSeatTimeTagComponent,CoachDayTagComponent,CoachAdvsComponent,CoachTeacherTagComponent,CoachSeatClassComponent,CoachTeacherTimeTagComponent,CoachLessonTagComponent,CoachHomeListComponent]
})
export class CoachListModule { }
