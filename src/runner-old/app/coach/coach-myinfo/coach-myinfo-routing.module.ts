import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachMyinfoComponent} from "./coach-myinfo.component";

const routes: Routes = [
  {
    path: '',
    component: CoachMyinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachMyinfoRoutingModule { }
