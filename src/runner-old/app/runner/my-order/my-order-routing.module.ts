import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyOrderComponent} from "./my-order.component";

const routes: Routes = [
  {
    path: '',
    component: MyOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOrderRoutingModule { }
