import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairWelcomeComponent} from "./repair-welcome.component";

const routes: Routes = [
  {
    path: '',
    component: RepairWelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairWelcomeRoutingModule { }
