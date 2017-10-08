import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Km8RoutingComponent} from "./km8-routing/km8-routing.component";

const routes: Routes = [
  {
    path: 'km8',
    component: Km8RoutingComponent,
    children: [
      {
        path: 'select',
        loadChildren: './km8-select/km8-select.module#Km8SelectModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Km8RoutingModule { }
