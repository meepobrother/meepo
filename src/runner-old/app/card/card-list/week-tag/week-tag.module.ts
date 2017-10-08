import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekTagComponent } from './week-tag.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeekTagComponent],
  exports: [WeekTagComponent]
})
export class WeekTagModule { }
