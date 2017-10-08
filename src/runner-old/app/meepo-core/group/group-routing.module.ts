import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupComponent} from "./group/group.component";

const routes: Routes = [
  {
    path: 'group',
    component: GroupComponent,
    children: [
      {
        path: 'add',
        loadChildren: './group-add/group-add.module#GroupAddModule'
      },
      {
        path: 'add/:id',
        loadChildren: './group-add/group-add.module#GroupAddModule'
      },
      {
        path: 'error',
        loadChildren: './group-error/group-error.module#GroupErrorModule'
      },
      {
        path: 'index',
        loadChildren: './group-index/group-index.module#GroupIndexModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
