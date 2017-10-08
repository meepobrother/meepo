import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenTabComponent } from './frozen-tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenTabComponent],
  exports: [FrozenTabComponent]
})
export class FrozenTabModule { }
