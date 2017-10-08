import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cars/index',
    loadChildren: 'app/cars/index/index.module#CarsIndexModule'
  },
  {
    path: 'cars/post',
    loadChildren: 'app/cars/post/post.module#PostModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
