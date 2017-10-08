import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/index',
    loadChildren: 'app/home/index/index.module#HomeIndexModule'
  },
  {
    path: 'home/my-address',
    loadChildren: 'app/home/my-address/my-address.module#MyAddressModule'
  },
  {
    path: 'home/my-service',
    loadChildren: 'app/home/my-service/my-service.module#MyServiceModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFreeRoutingModule { }
