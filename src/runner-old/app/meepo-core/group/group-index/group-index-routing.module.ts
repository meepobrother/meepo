import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupIndexComponent} from "./group-index.component";

const routes: Routes = [
  {
    path: '',
    component: GroupIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupIndexRoutingModule { }
