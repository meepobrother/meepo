import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsksRouterComponent} from "./asks-router/asks-router.component";

const routes: Routes = [
  {
    path: 'asks',
    component: AsksRouterComponent,
    children: [
      {
        path: 'index',
        loadChildren: './index/index.module#AsksIndexModule'
      },
      {
        path: 'post',
        loadChildren: './asks-post/asks-post.module#AsksPostModule'
      },
      {
        path: 'paid-list',
        loadChildren: './asks-paid-list/asks-paid-list.module#AsksPaidListModule'
      },
      {
        path: 'me',
        loadChildren: './asks-me/asks-me.module#AsksMeModule'
      },
      {
        path: 'follow',
        loadChildren: './asks-follow/asks-follow.module#AsksFollowModule'
      },
      {
        path: 'find',
        loadChildren: './asks-find/asks-find.module#AsksFindModule'
      },
      {
        path: 'info/:id',
        loadChildren: './asks-info/asks-info.module#AsksInfoModule'
      },
      {
        path: 'detail/:id',
        loadChildren: './asks-detail/asks-detail.module#AsksDetailModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsksRoutingModule { }
