import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MiaoshaIndexComponent} from "./miaosha-index.component";

const routes: Routes = [
  {
    path: '',
    component: MiaoshaIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiaoshaIndexRoutingModule { }
