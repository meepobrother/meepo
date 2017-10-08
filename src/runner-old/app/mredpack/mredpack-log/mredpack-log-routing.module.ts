import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MredpackLogComponent} from "./mredpack-log.component";

const routes: Routes = [
  {
    path: '',
    component: MredpackLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MredpackLogRoutingModule { }
