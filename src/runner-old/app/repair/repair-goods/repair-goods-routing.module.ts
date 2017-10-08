import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairGoodsComponent} from "./repair-goods.component";

const routes: Routes = [
  {
    path: '',
    component: RepairGoodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairGoodsRoutingModule { }
