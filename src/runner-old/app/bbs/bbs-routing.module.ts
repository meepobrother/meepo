import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BbsRouterComponent} from "./bbs-router/bbs-router.component";

const routes: Routes = [
  {
    path: 'bbs',
    component: BbsRouterComponent,
    children: [
      {
        path: 'index',
        loadChildren: 'app/bbs/index/index.module#BbsIndexModule'
      },
      {
        path: 'post',
        loadChildren: 'app/bbs/bbs-post/bbs-post.module#BbsPostModule'
      },
      {
        path: 'class',
        loadChildren: 'app/bbs/bbs-class/bbs-class.module#BbsClassModule'
      },
      {
        path: 'my-topic',
        loadChildren: 'app/bbs/my-topic/my-topic.module#MyTopicModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BbsRoutingModule { }
