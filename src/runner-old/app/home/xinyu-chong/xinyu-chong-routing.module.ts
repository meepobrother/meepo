import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {XinyuChongComponent} from "./xinyu-chong.component";

const routes: Routes = [
  {
    path: '',
    component: XinyuChongComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XinyuChongRoutingModule { }
