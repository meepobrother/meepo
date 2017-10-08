import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CloudDownloadComponent} from "./cloud-download.component";

const routes: Routes = [
  {
    path: '',
    component: CloudDownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudDownloadRoutingModule { }
