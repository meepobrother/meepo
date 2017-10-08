import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarginIndexRoutingModule } from './bargin-index-routing.module';
import { BarginIndexComponent } from './bargin-index.component';
import {BarginListModule} from "../bargin-list/bargin-list.module";

@NgModule({
  imports: [
    CommonModule,
    BarginIndexRoutingModule,
    BarginListModule
  ],
  declarations: [BarginIndexComponent]
})
export class BarginIndexModule { }
