import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardRechargeComponent} from "./card-recharge.component";

const routes: Routes = [
  {
    path: '',
    component: CardRechargeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRechargeRoutingModule { }
