import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreMapComponent} from "./core-map.component";

const routes: Routes = [
  {
    path: '',
    component: CoreMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreMapRoutingModule { }
