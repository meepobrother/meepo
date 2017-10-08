import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyServiceComponent} from "./my-service.component";

const routes: Routes = [
  {
    path: '',
    component: MyServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyServiceRoutingModule { }
