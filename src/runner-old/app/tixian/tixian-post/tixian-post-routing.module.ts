import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TixianPostComponent} from "./tixian-post.component";

const routes: Routes = [
  {
    path: '',
    component: TixianPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TixianPostRoutingModule { }
