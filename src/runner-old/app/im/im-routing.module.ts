import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImComponent} from "./im/im.component";

const routes: Routes = [
  {
    path: 'im',
    component: ImComponent,
    children: [
      {
        path: 'index',
        loadChildren: './im-index/im-index.module#ImIndexModule'
      },
      {
        path: 'friend',
        loadChildren: './im-friend/im-friend.module#ImFriendModule'
      },
      {
        path: 'member',
        loadChildren: './im-member/im-member.module#ImMemberModule'
      },
      {
        path: 'log/:openid',
        loadChildren: './im-log/im-log.module#ImLogModule'
      },
      {
        path: 'task/:id',
        loadChildren: './im-task/im-task.module#ImTaskModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImRoutingModule { }
