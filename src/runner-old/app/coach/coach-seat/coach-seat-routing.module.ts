import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachSeatComponent} from "./coach-seat.component";

const routes: Routes = [
  {
    path: '',
    component: CoachSeatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachSeatRoutingModule { }
