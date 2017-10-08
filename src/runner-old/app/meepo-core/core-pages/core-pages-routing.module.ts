import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreRouteComponent} from "./core-route/core-route.component";
import {CoreIndexComponent} from "./core-index/core-index.component";
import {CoreHomeComponent} from "./core-home/core-home.component";
import {CorePostComponent} from "./core-post/core-post.component";
import {CoreGuardModule} from "../core-guard/core-guard.module";
import {CorePostGuard} from "../core-guard/core-post.guard";
import {CoreIndexGuard} from "../core-guard/core-index.guard";

const routes: Routes = [
  {
    path: 'core',
    component: CoreRouteComponent,
    children: [
      {
        path: 'index',
        loadChildren: './core-index/core-index.module#CoreIndexModule',
        resolve: {data: CoreIndexGuard }
      },
      {
        path: 'home',
        loadChildren: 'app/home/index/index.module#HomeIndexModule',
      },
      {
        path: 'post',
        loadChildren: './core-post/core-post.module#CorePostModule',
        resolve: {data: CorePostGuard}
      },
      {
        path: 'error',
        loadChildren: './core-error/core-error.module#CoreErrorModule'
      },
      {
        path: 'test',
        loadChildren: './core-test/core-test.module#CoreTestModule'
      },
      {
        path: 'detail/:id',
        loadChildren: './core-detail/core-detail.module#CoreDetailModule'
      },
      {
        path: 'map',
        loadChildren: './core-map/core-map.module#CoreMapModule'
      }
    ]
  },
  {
    path: 'map/index',
    loadChildren: './core-map/core-map.module#CoreMapModule'
  },
  {
    path: 'runner',
    component: CoreRouteComponent,
    children: [
      {
        path: 'index',
        loadChildren: 'app/runner/runner-index/runner-index.module#RunnerIndexModule'
      },
      {
        path: 'my-order',
        loadChildren: 'app/runner/my-order/my-order.module#MyOrderModule'
      },
      {
        path: 'my-order/:status',
        loadChildren: 'app/runner/my-order/my-order.module#MyOrderModule'
      },
      {
        path: 'my-recive',
        loadChildren: 'app/runner/my-recive/my-recive.module#MyReciveModule'
      },
      {
        path: 'task-map',
        loadChildren: 'app/runner/runner-task-map/runner-task-map.module#RunnerTaskMapModule'
      },
      {
        path: 'post/index',
        loadChildren: 'app/meepo-core/core-pages/core-post/core-post.module#CorePostModule'
      },
      {
        path: 'share',
        loadChildren: 'app/runner/runner-share/runner-share.module#RunnerShareModule'
      },
      {
        path: 'home/index',
        loadChildren: 'app/home/index/index.module#HomeIndexModule'
      },
      {
        path: 'home/my-address',
        loadChildren: 'app/home/my-address/my-address.module#MyAddressModule'
      },
      {
        path: 'home/xinyu-chong',
        loadChildren: 'app/home/xinyu-chong/xinyu-chong.module#XinyuChongModule'
      },
      {
        path: 'tasks/index',
        loadChildren: 'app/meepo-core/core-pages/core-index/core-index.module#CoreIndexModule'
      },
      {
        path: 'song/index',
        loadChildren: 'app/meepo-core/core-pages/core-index/core-index.module#CoreIndexModule'
      },
      {
        path: 'song/detail/:id',
        loadChildren: 'app/meepo-core/core-pages/core-detail/core-detail.module#CoreDetailModule'
      },
      { //废弃
        path: 'song/post',
        loadChildren: 'app/meepo-core/core-pages/core-post/core-post.module#CorePostModule'
      },
      { //废弃
        path: 'song/text',
        loadChildren: 'app/meepo-core/core-pages/core-post/core-post.module#CorePostModule'
      },
      {
        path: 'help/index',
        loadChildren: 'app/meepo-core/core-pages/core-index/core-index.module#CoreIndexModule'
      },
      {
        path: 'help/detail/:id',
        loadChildren: 'app/meepo-core/core-pages/core-detail/core-detail.module#CoreDetailModule'
      },
      {
        path: 'help/post',
        loadChildren: 'app/meepo-core/core-pages/core-post/core-post.module#CorePostModule'
      },
      {
        path: 'help/text',
        loadChildren: 'app/meepo-core/core-pages/core-post/core-post.module#CorePostModule'
      },
      {
        path: 'buy/index',
        loadChildren: 'app/meepo-core/core-pages/core-index/core-index.module#CoreIndexModule'
      },
      {
        path: 'buy/text',
        loadChildren: 'app/meepo-core/core-pages/core-post/core-post.module#CorePostModule'
      },
      {
        path: 'buy/post',
        loadChildren: 'app/meepo-core/core-pages/core-post/core-post.module#CorePostModule'
      },
      {
        path: 'buy/detail/:id',
        loadChildren: 'app/meepo-core/core-pages/core-detail/core-detail.module#CoreDetailModule'
      }
    ]
  },
  {
    path: 'song/detail/:id',
    loadChildren: 'app/meepo-core/core-pages/core-detail/core-detail.module#CoreDetailModule'
  },
  {
    path: 'help/detail/:id',
    loadChildren: 'app/meepo-core/core-pages/core-detail/core-detail.module#CoreDetailModule'
  },
  {
    path: 'buy/detail/:id',
    loadChildren: 'app/meepo-core/core-pages/core-detail/core-detail.module#CoreDetailModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CoreGuardModule],
  exports: [RouterModule]
})
export class CorePagesRoutingModule { }
