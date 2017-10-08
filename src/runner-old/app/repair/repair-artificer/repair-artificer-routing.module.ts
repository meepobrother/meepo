import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairArtificerComponent} from "./repair-artificer.component";

const routes: Routes = [
  {
    path: '',
    component: RepairArtificerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairArtificerRoutingModule { }
