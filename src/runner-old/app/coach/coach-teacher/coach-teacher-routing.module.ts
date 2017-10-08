import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachTeacherComponent} from "./coach-teacher.component";

const routes: Routes = [
  {
    path: '',
    component: CoachTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachTeacherRoutingModule { }
