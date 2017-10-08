import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImTaskComponent} from "./im-task.component";

const routes: Routes = [
  {
    path: '',
    component: ImTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImTaskRoutingModule { }
