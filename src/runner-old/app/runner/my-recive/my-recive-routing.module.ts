import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyReciveComponent} from "./my-recive.component";

const routes: Routes = [
  {
    path: '',
    component: MyReciveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyReciveRoutingModule { }
