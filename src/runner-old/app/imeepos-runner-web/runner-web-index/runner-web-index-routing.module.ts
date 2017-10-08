import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerWebIndexComponent} from "./runner-web-index.component";

const routes: Routes = [
  {
    path: '',
    component: RunnerWebIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerWebIndexRoutingModule { }
