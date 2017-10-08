import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyMoneyComponent} from "./my-money.component";

const routes: Routes = [
  {
    path: '',
    component: MyMoneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMoneyRoutingModule { }
