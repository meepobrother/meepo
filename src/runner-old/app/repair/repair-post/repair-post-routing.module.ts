import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairPostComponent} from "./repair-post.component";

const routes: Routes = [
  {
    path: '',
    component: RepairPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairPostRoutingModule { }
