import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SaveImageComponent} from "./save-image.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SaveImageComponent],
  exports: [SaveImageComponent]
})
export class SaveImageModule { }
