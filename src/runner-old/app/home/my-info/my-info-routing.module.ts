import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyInfoComponent} from "./my-info.component";

const routes: Routes = [
  {
    path: '',
    component: MyInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInfoRoutingModule { }
