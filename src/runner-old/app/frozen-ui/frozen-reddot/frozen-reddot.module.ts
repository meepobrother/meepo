import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenReddotComponent } from './frozen-reddot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenReddotComponent],
  exports: [FrozenReddotComponent]
})
export class FrozenReddotModule { }
