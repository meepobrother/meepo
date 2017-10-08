import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerWebTasksComponent} from "./runner-web-tasks.component";

const routes: Routes = [
  {
    path: '',
    component: RunnerWebTasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerWebTasksRoutingModule { }
