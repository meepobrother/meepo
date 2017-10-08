import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachTeacherJoinRoutingModule } from './coach-teacher-join-routing.module';
import { CoachTeacherJoinComponent } from './coach-teacher-join.component';
import {MobileVerityModule} from "../../runner-components/mobile-verity/mobile-verity.module";
import {CoachListModule} from "../coach-list/coach-list.module";
import {UploaderModule} from "../../runner-components/uploader/uploader.module";
import {FormsModule} from "@angular/forms";
import {CoachTeacherService} from "services-components";
import {CoachTeacherJoinGuard} from "./coach-teacher-join.guard";

@NgModule({
  imports: [
    CommonModule,
    CoachTeacherJoinRoutingModule,
    MobileVerityModule,
    CoachListModule,
    UploaderModule,
    FormsModule
  ],
  declarations: [CoachTeacherJoinComponent],
  providers: [CoachTeacherService,CoachTeacherJoinGuard]
})
export class CoachTeacherJoinModule { }
