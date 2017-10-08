import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Km8SelectComponent} from "./km8-select.component";

const routes: Routes = [
  {
    path: '',
    component: Km8SelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Km8SelectRoutingModule { }
