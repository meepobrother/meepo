import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerTaskMapComponent} from "./runner-task-map.component";

const routes: Routes = [
  {
    path: '',
    component: RunnerTaskMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerTaskMapRoutingModule { }
