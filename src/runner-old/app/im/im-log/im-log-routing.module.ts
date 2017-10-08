import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImLogComponent} from "./im-log.component";

const routes: Routes = [
  {
    path: '',
    component: ImLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImLogRoutingModule { }
