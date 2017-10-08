import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsksFollowComponent} from "./asks-follow.component";

const routes: Routes = [
  {
    path: '',
    component: AsksFollowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsksFollowRoutingModule { }
