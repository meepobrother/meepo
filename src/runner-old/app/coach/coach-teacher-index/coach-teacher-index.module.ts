import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachTeacherIndexRoutingModule } from './coach-teacher-index-routing.module';
import { CoachTeacherIndexComponent } from './coach-teacher-index.component';

@NgModule({
  imports: [
    CommonModule,
    CoachTeacherIndexRoutingModule
  ],
  declarations: [CoachTeacherIndexComponent]
})
export class CoachTeacherIndexModule { }
