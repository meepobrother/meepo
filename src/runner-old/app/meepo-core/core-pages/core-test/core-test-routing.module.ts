import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreTestComponent} from "./core-test.component";

const routes: Routes = [
  {
    path: '',
    component: CoreTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreTestRoutingModule { }
