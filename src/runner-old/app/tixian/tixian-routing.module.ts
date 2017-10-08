import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TixianRouterComponent} from "./tixian-router/tixian-router.component";

const routes: Routes = [
  {
    path: 'tixian',
    component: TixianRouterComponent,
    children: [
      {
        path: 'post',
        loadChildren: './tixian-post/tixian-post.module#TixianPostModule'
      },
      {
        path: 'log',
        loadChildren: './tixian-log/tixian-log.module#TixianLogModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TixianRoutingModule { }
