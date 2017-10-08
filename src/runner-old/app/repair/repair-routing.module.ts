import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepairRouterComponent} from "./repair-router/repair-router.component";

const routes: Routes = [
  {
    path: 'repair',
    component: RepairRouterComponent,
    children: [
      {
        path: 'index',
        loadChildren: './repair-index/repair-index.module#RepairIndexModule'
      },
      {
        path: 'post',
        loadChildren: './repair-post/repair-post.module#RepairPostModule'
      },
      {
        path: 'coach',
        loadChildren: './repair-coach/repair-coach.module#RepairCoachModule'
      },
      {
        path: 'home',
        loadChildren: './repair-home/repair-home.module#RepairHomeModule'
      },
      {
        path: 'welcome',
        loadChildren: './repair-welcome/repair-welcome.module#RepairWelcomeModule'
      },
      {
        path: 'shop-join',
        loadChildren: './repair-shop-join/repair-shop-join.module#RepairShopJoinModule'
      }
    ]
  },
  {
    path: 'repair/xiche/:id',
    loadChildren: './repair-xiche/repair-xiche.module#RepairXicheModule'
  },
  {
    path: 'repair/weixiu/:id',
    loadChildren: './repair-weixiu/repair-weixiu.module#RepairWeixiuModule'
  },
  {
    path: 'repair/meirong/:id',
    loadChildren: './repair-meirong/repair-meirong.module#RepairMeirongModule'
  },
  {
    path: 'repair/carfiles-edit',
    loadChildren: './carfiles-edit/carfiles-edit.module#CarfilesEditModule'
  },
  {
    path: 'repair/artificer',
    loadChildren: './repair-artificer/repair-artificer.module#RepairArtificerModule'
  },
  {
    path: 'repair/goods',
    loadChildren: './repair-goods/repair-goods.module#RepairGoodsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairRoutingModule { }
