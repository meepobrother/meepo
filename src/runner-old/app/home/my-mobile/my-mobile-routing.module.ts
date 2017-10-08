import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyMobileComponent} from "./my-mobile.component";

const routes: Routes = [
  {
    path: '',
    component: MyMobileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMobileRoutingModule { }
