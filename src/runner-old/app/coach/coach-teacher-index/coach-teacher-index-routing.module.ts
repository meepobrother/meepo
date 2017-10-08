import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachTeacherIndexComponent} from "./coach-teacher-index.component";

const routes: Routes = [
  {
    path: '',
    component: CoachTeacherIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachTeacherIndexRoutingModule { }
