import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreIndexComponent} from "./core-index.component";
import {CoreIndexGuard} from "../../core-guard/core-index.guard";

const routes: Routes = [
  {
    path: '',
    component: CoreIndexComponent,
    resolve: {data: CoreIndexGuard  }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CoreIndexGuard]
})
export class CoreIndexRoutingModule { }
