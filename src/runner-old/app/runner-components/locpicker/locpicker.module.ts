import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocpickerComponent} from "./locpicker.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LocpickerComponent],
  exports: [LocpickerComponent]
})
export class LocpickerModule { }
