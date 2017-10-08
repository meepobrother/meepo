import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsksPostComponent} from "./asks-post.component";

const routes: Routes = [
  {
    path: '',
    component: AsksPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsksPostRoutingModule { }
