import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreFlexTabbarComponent } from './core-flex-tabbar.component';
import {NxTabbarModule} from "../../../runner-components/nx-tabbar/nx-tabbar.module";

@NgModule({
  imports: [
    CommonModule,
    NxTabbarModule
  ],
  declarations: [CoreFlexTabbarComponent],
  exports: [CoreFlexTabbarComponent]
})
export class CoreFlexTabbarModule { }
