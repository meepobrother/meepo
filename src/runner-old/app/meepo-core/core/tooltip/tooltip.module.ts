import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import {AlignModule} from "../align/align.module";

@NgModule({
  imports: [
    CommonModule,
    AlignModule
  ],
  declarations: [TooltipComponent],
  exports: [TooltipComponent]
})
export class TooltipModule { }
