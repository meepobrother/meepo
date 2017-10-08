import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsksDetailComponent} from "./asks-detail.component";

const routes: Routes = [
  {
    path: '',
    component: AsksDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsksDetailRoutingModule { }
