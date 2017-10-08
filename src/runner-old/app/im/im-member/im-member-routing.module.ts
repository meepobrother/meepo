import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ImMemberComponent} from "./im-member.component";

const routes: Routes = [
  {
    path: '',
    component: ImMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImMemberRoutingModule { }
