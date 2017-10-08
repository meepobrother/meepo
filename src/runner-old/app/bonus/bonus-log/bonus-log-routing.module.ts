import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BonusLogComponent} from "./bonus-log.component";

const routes: Routes = [
  {
    path: '',
    component: BonusLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusLogRoutingModule { }
