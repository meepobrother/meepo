import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairMeirongComponent} from "./repair-meirong.component";

const routes: Routes = [
  {
    path: '',
    component: RepairMeirongComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairMeirongRoutingModule { }
