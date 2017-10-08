import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardRouterComponent} from "./card-router/card-router.component";

const routes: Routes = [
  {
    path: 'card',
    component: CardRouterComponent,
    children: [
      {
        path: 'index',
        loadChildren: './card-index/card-index.module#CardIndexModule'
      },
      {
        path: 'add',
        loadChildren: './card-add/card-add.module#CardAddModule'
      },
      {
        path: 'recharge',
        loadChildren: './card-recharge/card-recharge.module#CardRechargeModule'
      },
      {
        path: 'log',
        loadChildren: './card-gifts-log/card-gifts-log.module#CardGiftsLogModule'
      },
      {
        path: 'profiles',
        loadChildren: './card-profiles/card-profiles.module#CardProfilesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
