import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutMapComponent} from "./rout-map.component";

const routes: Routes = [
  {
    path: '',
    component: RoutMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutMapRoutingModule { }
