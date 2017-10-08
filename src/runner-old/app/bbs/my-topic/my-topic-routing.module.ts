import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyTopicComponent} from "./my-topic.component";

const routes: Routes = [
  {
    path:'',
    component: MyTopicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTopicRoutingModule { }
