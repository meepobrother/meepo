import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSelectComponent } from './time-select.component';
import {AlloyModule} from "../alloy/alloy.module";

@NgModule({
  imports: [
    CommonModule,
    AlloyModule
  ],
  declarations: [TimeSelectComponent],
  exports: [TimeSelectComponent]
})
export class TimeSelectModule { }
