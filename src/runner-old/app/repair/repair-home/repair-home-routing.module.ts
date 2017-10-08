import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairHomeComponent} from "./repair-home.component";

const routes: Routes = [
  {
    path: '',
    component: RepairHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairHomeRoutingModule { }
