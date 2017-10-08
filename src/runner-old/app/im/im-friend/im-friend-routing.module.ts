import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImFriendComponent} from "./im-friend.component";

const routes: Routes = [
  {
    path: '',
    component: ImFriendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImFriendRoutingModule { }
