import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyRealinfoComponent} from "./my-realinfo.component";

const routes: Routes = [
  {
    path: '',
    component: MyRealinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRealinfoRoutingModule { }
