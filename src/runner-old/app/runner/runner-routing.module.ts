import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerRouterComponent} from "./runner-router/runner-router.component";

const routes: Routes = [
  {
    path: 'runner',
    component: RunnerRouterComponent,
    children: [
      {
        path: 'index',
        loadChildren: './runner-index/runner-index.module#RunnerIndexModule'
      },
      {
        path: 'my-order',
        loadChildren: './my-order/my-order.module#MyOrderModule'
      },
      {
        path: 'my-order/:status',
        loadChildren: './my-order/my-order.module#MyOrderModule'
      },
      {
        path: 'my-recive',
        loadChildren: './my-recive/my-recive.module#MyReciveModule'
      },
      {
        path: 'task-map',
        loadChildren: './runner-task-map/runner-task-map.module#RunnerTaskMapModule'
      },
      {
        path: 'post/index',
        loadChildren: 'app/meepo-core/core-pages/core-post/core-post.module#CorePostModule'
      },
      {
        path: 'share',
        loadChildren: './runner-share/runner-share.module#RunnerShareModule'
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
        loadChildren: 'app/song/index/index.module#SongIndexModule'
      },
      {
        path: 'song/detail/:id',
        loadChildren: 'app/meepo-core/core-pages/core-detail/core-detail.module#CoreDetailModule'
      },
      {
        path: 'song/post',
        loadChildren: 'app/song/post/post.module#PostModule'
      },
      {
        path: 'song/text',
        loadChildren: 'app/song/text/text.module#TextModule'
      },
      {
        path: 'help/index',
        loadChildren: 'app/help/help-index/index.module#HelpIndexModule'
      },
      {
        path: 'help/detail/:id',
        loadChildren: 'app/meepo-core/core-pages/core-detail/core-detail.module#CoreDetailModule'
      },
      {
        path: 'help/post',
        loadChildren: 'app/help/help-post/post.module#PostModule'
      },
      {
        path: 'help/text',
        loadChildren: 'app/help/help-text/text.module#TextModule'
      },
      {
        path: 'buy/index',
        loadChildren: 'app/buy/buy-index/index.module#BuyIndexModule'
      },
      {
        path: 'buy/text',
        loadChildren: 'app/buy/buy-text/text.module#TextModule'
      },
      {
        path: 'buy/post',
        loadChildren: 'app/buy/buy-post/post.module#PostModule'
      },
      {
        path: 'buy/detail/:id',
        loadChildren: 'app/meepo-core/core-pages/core-detail/core-detail.module#CoreDetailModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnerRoutingModule { }
