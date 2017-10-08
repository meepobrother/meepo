import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachTeacherJoinComponent} from "./coach-teacher-join.component";
import {CoachTeacherJoinGuard} from "./coach-teacher-join.guard";

const routes: Routes = [
  {
    path: '',
    component: CoachTeacherJoinComponent,
    canActivate: [CoachTeacherJoinGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachTeacherJoinRoutingModule { }
