import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourSelectComponent } from './hour-select.component';
import {AlloyModule} from "../alloy/alloy.module";


@NgModule({
  imports: [
    CommonModule,
    AlloyModule
  ],
  declarations: [HourSelectComponent],
  exports: [HourSelectComponent]
})
export class HourSelectModule { }
