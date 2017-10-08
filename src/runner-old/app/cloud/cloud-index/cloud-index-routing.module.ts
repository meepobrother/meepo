import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CloudIndexComponent} from "./cloud-index.component";

const routes: Routes = [
  {
    path: '',
    component: CloudIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudIndexRoutingModule { }
