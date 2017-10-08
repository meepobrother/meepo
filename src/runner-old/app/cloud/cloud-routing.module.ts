import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CloudRouterComponent} from "./cloud-router/cloud-router.component";

const routes: Routes = [
  {
    path: 'cloud',
    component: CloudRouterComponent,
    children: [
      {
        path: 'index',
        loadChildren: './cloud-index/cloud-index.module#CloudIndexModule'
      },
      {
        path: 'download',
        loadChildren: './cloud-download/cloud-download.module#CloudDownloadModule'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudRoutingModule { }
