import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CorePostComponent} from "./core-post.component";
import {CorePostGuard} from "../../core-guard/core-post.guard";

const routes: Routes = [
  {
    path: '',
    component: CorePostComponent,
    resolve: {data: CorePostGuard}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CorePostGuard]
})
export class CorePostRoutingModule { }
