import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import {TooltipModule} from "../tooltip/tooltip.module";

@NgModule({
  imports: [
    CommonModule,
      TooltipModule
  ],
  declarations: [PopoverComponent],
  exports: [PopoverComponent]
})
export class PopoverModule { }
