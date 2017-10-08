import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'miaosha/index',
    loadChildren: 'app/miaosha/miaosha-index/miaosha-index.module#MiaoshaIndexModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiaoshaRoutingModule { }
