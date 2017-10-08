import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MredpackMapComponent} from "./mredpack-map.component";

const routes: Routes = [
  {
    path: '',
    component: MredpackMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MredpackMapRoutingModule { }
