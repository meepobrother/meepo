import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreErrorRoutingModule } from './core-error-routing.module';
import {CoreErrorComponent} from "./core-error.component";

@NgModule({
  imports: [
    CommonModule,
    CoreErrorRoutingModule
  ],
  declarations: [CoreErrorComponent]
})
export class CoreErrorModule { }
