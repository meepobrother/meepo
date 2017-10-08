import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsksPaidListComponent} from "./asks-paid-list.component";

const routes: Routes = [
  {
    path: '',
    component: AsksPaidListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsksPaidListRoutingModule { }
