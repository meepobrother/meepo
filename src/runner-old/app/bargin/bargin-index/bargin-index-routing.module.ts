import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarginIndexComponent} from "./bargin-index.component";

const routes: Routes = [
  {
    path: '',
    component: BarginIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarginIndexRoutingModule { }
