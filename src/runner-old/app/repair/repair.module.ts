import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairRoutingModule } from './repair-routing.module';
import {RepairRouterModule} from "./repair-router/repair-router.module";

@NgModule({
  imports: [
    CommonModule,
    RepairRoutingModule,
    RepairRouterModule
  ],
  declarations: []
})
export class RepairModule { }
