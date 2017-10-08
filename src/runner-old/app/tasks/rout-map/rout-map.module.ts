import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutMapRoutingModule } from './rout-map-routing.module';
import { RoutMapComponent } from './rout-map.component';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@NgModule({
  imports: [
    CommonModule,
    RoutMapRoutingModule
  ],
  declarations: [RoutMapComponent],
  providers: [RunnerUtilService]
})
export class RoutMapModule { }
