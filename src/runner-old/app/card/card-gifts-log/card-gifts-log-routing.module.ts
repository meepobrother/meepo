import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardGiftsLogComponent} from "./card-gifts-log.component";

const routes: Routes = [
  {
    path: '',
    component: CardGiftsLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardGiftsLogRoutingModule { }
