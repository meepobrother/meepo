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
    path: 'home/my-mobile',
    loadChildren: 'app/home/my-mobile/my-mobile.module#MyMobileModule'
  },
  {
    path: 'home/my-info',
    loadChildren: 'app/home/my-info/my-info.module#MyInfoModule'
  },
  {
    path: 'qq/vip/buy',
    loadChildren: 'app/home/my-realinfo/my-realinfo.module#MyRealinfoModule'
  },
  {
    path: 'home/xinyu-chong',
    loadChildren: 'app/home/xinyu-chong/xinyu-chong.module#XinyuChongModule'
  },
  {
    path: 'home/my-money',
    loadChildren: './my-money/my-money.module#MyMoneyModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV10RoutingModule { }
