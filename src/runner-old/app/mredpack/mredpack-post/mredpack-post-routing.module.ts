import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MredpackPostComponent} from "./mredpack-post.component";

const routes: Routes = [
  {
    path: '',
    component: MredpackPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MredpackPostRoutingModule { }
