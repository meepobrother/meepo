import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenPoptipsComponent } from './frozen-poptips.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenPoptipsComponent],
  exports: [FrozenPoptipsComponent]
})
export class FrozenPoptipsModule { }
