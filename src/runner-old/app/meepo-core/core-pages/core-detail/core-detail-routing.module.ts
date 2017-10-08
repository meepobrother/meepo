import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreDetailComponent} from "./core-detail.component";

const routes: Routes = [
  {
    path: '',
    component: CoreDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreDetailRoutingModule { }
