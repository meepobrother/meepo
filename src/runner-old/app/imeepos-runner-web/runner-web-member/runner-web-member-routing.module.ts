import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerWebMemberComponent} from "./runner-web-member.component";

const routes: Routes = [
  {
    path: '',
    component: RunnerWebMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerWebMemberRoutingModule { }
