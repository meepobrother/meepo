import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachMylogComponent} from "./coach-mylog.component";

const routes: Routes = [
  {
    path: '',
    component: CoachMylogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachMylogRoutingModule { }
