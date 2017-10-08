import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachLessonComponent} from "./coach-lesson.component";

const routes: Routes = [
  {
    path: '',
    component: CoachLessonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachLessonRoutingModule { }
