import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicesShopComponent} from "./services-shop.component";

const routes: Routes = [
  {
    path: '',
    component: ServicesShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesShopRoutingModule { }
