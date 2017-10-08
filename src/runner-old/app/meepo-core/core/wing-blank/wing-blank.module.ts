import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WingBlankComponent } from './wing-blank.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WingBlankComponent],
  exports: [WingBlankComponent]
})
export class WingBlankModule { }
