import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerComponent} from "./runner.component";

const routes: Routes = [
  {
    path: '',
    component: RunnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerRoutingModule { }
