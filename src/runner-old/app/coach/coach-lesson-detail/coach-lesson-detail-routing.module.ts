import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachLessonDetailComponent} from "./coach-lesson-detail.component";

const routes: Routes = [
  {
    path: '',
    component: CoachLessonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachLessonDetailRoutingModule { }
