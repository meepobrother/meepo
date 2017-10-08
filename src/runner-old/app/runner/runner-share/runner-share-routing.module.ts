import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerShareComponent} from "./runner-share.component";

const routes: Routes = [
  {
    path: '',
    component: RunnerShareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerShareRoutingModule { }
