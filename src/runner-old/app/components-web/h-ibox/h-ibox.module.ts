import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HIboxComponent } from './h-ibox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HIboxComponent],
  exports: [HIboxComponent]
})
export class HIboxModule { }
