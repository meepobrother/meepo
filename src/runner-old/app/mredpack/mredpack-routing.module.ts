import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MredpackComponent} from "./mredpack/mredpack.component";

const routes: Routes = [
  {
    path: 'mredpack',
    component: MredpackComponent,
    children: [
      {
        path: 'post',
        loadChildren: './mredpack-post/mredpack-post.module#MredpackPostModule'
      },
      {
        path: 'map',
        loadChildren: './mredpack-map/mredpack-map.module#MredpackMapModule'
      },
      {
        path: 'log',
        loadChildren: './mredpack-log/mredpack-log.module#MredpackLogModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MredpackRoutingModule { }
