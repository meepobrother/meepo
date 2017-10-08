import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupErrorComponent} from "./group-error.component";

const routes: Routes = [
  {
    path: '',
    component: GroupErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupErrorRoutingModule { }
