import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachIndexComponent} from "./coach-index.component";
import {CoachIndexGuard} from "./coach-index.guard";

const routes: Routes = [
  {
    path: '',
    component: CoachIndexComponent,
    canActivate: [CoachIndexGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CoachIndexGuard]
})
export class CoachIndexRoutingModule { }
