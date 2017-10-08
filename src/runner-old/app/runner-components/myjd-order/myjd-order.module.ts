import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyjdOrderComponent } from './myjd-order.component';
import {MyjdContentModule} from "../myjd-content/myjd-content.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MyjdContentModule,
    RouterModule
  ],
  declarations: [MyjdOrderComponent],
  exports: [MyjdOrderComponent]
})
export class MyjdOrderModule { }
