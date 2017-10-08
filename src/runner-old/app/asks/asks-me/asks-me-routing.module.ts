import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsksMeComponent} from "./asks-me.component";

const routes: Routes = [
  {
    path: '',
    component: AsksMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsksMeRoutingModule { }
