import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerWebMoneyComponent} from "./runner-web-money.component";

const routes: Routes = [
  {
    path: '',
    component: RunnerWebMoneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerWebMoneyRoutingModule { }
