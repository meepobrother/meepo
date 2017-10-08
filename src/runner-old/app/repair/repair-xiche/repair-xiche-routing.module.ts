import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairXicheComponent} from "./repair-xiche.component";

const routes: Routes = [
  {
    path: '',
    component: RepairXicheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairXicheRoutingModule { }
