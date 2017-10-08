import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BonusRoutingComponent} from "./bonus-routing/bonus-routing.component";

const routes: Routes = [
  {
    path: 'bonus',
    component: BonusRoutingComponent,
    children: [
      {
        path: 'log',
        loadChildren: './bonus-log/bonus-log.module#BonusLogModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusRoutingModule { }
