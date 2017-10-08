import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopsIndexComponent} from "./shops-index.component";

const routes: Routes = [
  {
    path: '',
    component: ShopsIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsIndexRoutingModule { }
