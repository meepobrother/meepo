import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerWebRunnerComponent} from "./runner-web-runner.component";

const routes: Routes = [
  {
    path: '',
    component: RunnerWebRunnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerWebRunnerRoutingModule { }
