import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsksFindComponent} from "./asks-find.component";

const routes: Routes = [
  {
    path: '',
    component: AsksFindComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsksFindRoutingModule { }
