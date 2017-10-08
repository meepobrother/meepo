import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreErrorComponent} from "./core-error.component";

const routes: Routes = [
  {
    path: '',
    component: CoreErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreErrorRoutingModule { }
