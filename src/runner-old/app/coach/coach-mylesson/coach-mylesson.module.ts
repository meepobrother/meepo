import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachMylessonRoutingModule } from './coach-mylesson-routing.module';
import { CoachMylessonComponent } from './coach-mylesson.component';
import {FormsModule} from "@angular/forms";
import {UploaderModule} from "../../runner-components/uploader/uploader.module";
import {CoachLessonService} from "services-components/src/app/coach-services/coach-lesson.service";
import {CoachListModule} from "../coach-list/coach-list.module";
import {WeekTagModule} from "../../card/card-list/week-tag/week-tag.module";
import {HourSelectModule} from "../../runner-components/hour-select/hour-select.module";

@NgModule({
  imports: [
    CommonModule,
    CoachMylessonRoutingModule,
    FormsModule,
    UploaderModule,
    CoachListModule,
      WeekTagModule,
      HourSelectModule
  ],
  declarations: [CoachMylessonComponent],
  providers: [CoachLessonService]
})
export class CoachMylessonModule { }
