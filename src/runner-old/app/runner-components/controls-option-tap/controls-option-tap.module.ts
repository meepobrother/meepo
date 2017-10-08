import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsOptionTapComponent } from './controls-option-tap.component';
import {EditBtnModule} from "../edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
    FormsModule
  ],
  declarations: [ControlsOptionTapComponent],
  exports: [ControlsOptionTapComponent]
})
export class ControlsOptionTapModule { }
