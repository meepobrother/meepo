import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LvyouIndexComponent} from "./lvyou-index.component";

const routes: Routes = [
  {
    path: '',
    component: LvyouIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LvyouIndexRoutingModule { }
