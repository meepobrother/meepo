import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'buy/index',
    loadChildren: './buy-index/index.module#BuyIndexModule'
  },
  {
    path: 'buy/post',
    loadChildren: './buy-post/post.module#PostModule'
  },
  {
    path: 'buy/detail/:id',
    loadChildren: './buy-detail/detail.module#DetailModule'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }
