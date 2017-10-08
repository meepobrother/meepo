import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreTestRoutingModule } from './core-test-routing.module';
import {CoreTestComponent} from "./core-test.component";
@NgModule({
  imports: [
    CommonModule,
    CoreTestRoutingModule
  ],
  declarations: [CoreTestComponent]
})
export class CoreTestModule { }
