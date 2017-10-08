import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachHomeComponent} from "./coach-home.component";

const routes: Routes = [
  {
    path: '',
    component: CoachHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachHomeRoutingModule { }
