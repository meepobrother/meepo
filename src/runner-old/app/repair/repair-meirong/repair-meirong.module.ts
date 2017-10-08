import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairMeirongRoutingModule } from './repair-meirong-routing.module';
import { RepairMeirongComponent } from './repair-meirong.component';
import {RepairListModule} from "../repair-list/repair-list.module";

@NgModule({
  imports: [
    CommonModule,
    RepairMeirongRoutingModule,
    RepairListModule
  ],
  declarations: [RepairMeirongComponent]
})
export class RepairMeirongModule { }
