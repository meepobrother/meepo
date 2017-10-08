import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import {RunnerUtilService} from "../runner-components/runner-util.service";

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  declarations: [],
  providers: [RunnerUtilService]
})
export class WelcomeModule { }
