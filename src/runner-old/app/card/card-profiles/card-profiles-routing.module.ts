import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardProfilesComponent} from "./card-profiles.component";

const routes: Routes = [
  {
    path: '',
    component: CardProfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardProfilesRoutingModule { }
