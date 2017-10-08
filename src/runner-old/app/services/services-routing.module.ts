import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'services/index',
    loadChildren: 'app/services/index/index.module#ServicesIndexModule'
  },
  {
    path: 'services/runner',
    loadChildren: 'app/services/runner/runner.module#RunnerModule'
  },
  {
    path: 'services/shop/:id',
    loadChildren: './services-shop/services-shop.module#ServicesShopModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
