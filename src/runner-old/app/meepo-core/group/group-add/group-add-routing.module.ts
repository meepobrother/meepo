import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupAddComponent} from "./group-add.component";

const routes: Routes = [
  {
    path: '',
    component: GroupAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupAddRoutingModule { }
