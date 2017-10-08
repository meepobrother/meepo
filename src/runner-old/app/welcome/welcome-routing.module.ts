import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeGuard} from "./welcome.guard";

const routes: Routes = [
  {
    path: 'welcome/index',
    loadChildren: './welcome-index/welcome-index.module#WelcomeIndexModule',
    canActivate: [WelcomeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [WelcomeGuard]
})
export class WelcomeRoutingModule { }
