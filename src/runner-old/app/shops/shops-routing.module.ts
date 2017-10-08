import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'shops/index',
    loadChildren: 'app/shops/shops-index/shops-index.module#ShopsIndexModule'
  },
  {
    path: 'shops/join',
    loadChildren: './shops-join/shops-join.module#ShopsJoinModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
