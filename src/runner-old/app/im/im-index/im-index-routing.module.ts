import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImIndexComponent} from "./im-index.component";

const routes: Routes = [
  {
    path: '',
    component: ImIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImIndexRoutingModule { }
