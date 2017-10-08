import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachMylessonComponent} from "./coach-mylesson.component";

const routes: Routes = [
  {
    path: '',
    component: CoachMylessonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachMylessonRoutingModule { }
