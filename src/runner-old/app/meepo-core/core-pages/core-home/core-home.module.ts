import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CoreHomeComponent} from "./core-home.component";

let routes: Routes = [
  {
    path: '',
    component:CoreHomeComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoreHomeComponent]
})
export class CoreHomeModule { }
