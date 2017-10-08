import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeaxisComponent } from './timeaxis.component';
import {AnimateModule} from "../animate/animate.module";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimeaxisComponent],
  exports: [TimeaxisComponent]
})
export class TimeaxisModule { }
