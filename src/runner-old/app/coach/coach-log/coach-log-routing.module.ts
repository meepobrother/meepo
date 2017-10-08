import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachLogComponent} from "./coach-log.component";

const routes: Routes = [
  {
    path: '',
    component: CoachLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachLogRoutingModule { }
