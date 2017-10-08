import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairShopJoinComponent} from "./repair-shop-join.component";

const routes: Routes = [
  {
    path: '',
    component: RepairShopJoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairShopJoinRoutingModule { }
