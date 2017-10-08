import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairRouterComponent} from "./repair-router.component";

const routes: Routes = [
  {
    path: 'repair',
    component: RepairRouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairRouterRoutingModule { }
