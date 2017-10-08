import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichEditComponent } from './rich-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RichEditComponent],
  exports: [RichEditComponent]
})
export class RichEditModule { }
