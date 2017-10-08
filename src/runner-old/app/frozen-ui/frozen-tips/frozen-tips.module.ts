import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenTipsComponent } from './frozen-tips.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenTipsComponent],
  exports: [FrozenTipsComponent]
})
export class FrozenTipsModule { }
