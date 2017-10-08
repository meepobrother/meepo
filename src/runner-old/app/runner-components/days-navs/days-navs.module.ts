import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysNavsComponent } from './days-navs.component';
import {NxTabbarModule} from "../nx-tabbar/nx-tabbar.module";

@NgModule({
  imports: [
    CommonModule,
    NxTabbarModule
  ],
  declarations: [DaysNavsComponent],
  exports: [DaysNavsComponent]
})
export class DaysNavsModule { }
