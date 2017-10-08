import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachTeacherDetailComponent} from "./coach-teacher-detail.component";

const routes: Routes = [
  {
    path: '',
    component: CoachTeacherDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachTeacherDetailRoutingModule { }
