import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BbsPostComponent} from "./bbs-post.component";

const routes: Routes = [
  {
    path: '',
    component: BbsPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BbsPostRoutingModule { }
