import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsksInfoComponent} from "./asks-info.component";

const routes: Routes = [
  {
    path: '',
    component: AsksInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsksInfoRoutingModule { }
