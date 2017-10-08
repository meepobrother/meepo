import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CorePostGuard} from "./core-post.guard";
import {CoreIndexGuard} from "./core-index.guard";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CorePostGuard,CoreIndexGuard]
})
export class CoreGuardModule { }
