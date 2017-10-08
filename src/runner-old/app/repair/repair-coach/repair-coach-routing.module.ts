import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairCoachComponent} from "./repair-coach.component";

const routes: Routes = [
  {
    path: '',
    component: RepairCoachComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairCoachRoutingModule { }
