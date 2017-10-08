import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairWeixiuComponent} from "./repair-weixiu.component";

const routes: Routes = [
  {
    path: '',
    component: RepairWeixiuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairWeixiuRoutingModule { }
