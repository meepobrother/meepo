import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index.component";
import {HomeIndexGuard} from "../guards/home-index.guard";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: {data: HomeIndexGuard}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeIndexGuard]
})
export class IndexRoutingModule { }
