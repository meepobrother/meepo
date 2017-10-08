import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachShopinfoComponent} from "./coach-shopinfo.component";

const routes: Routes = [
  {
    path: '',
    component: CoachShopinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachShopinfoRoutingModule { }
