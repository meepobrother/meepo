import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TixianLogComponent} from "./tixian-log.component";

const routes: Routes = [
  {
    path: '',
    component: TixianLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TixianLogRoutingModule { }
