import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenNewstipsComponent } from './frozen-newstips.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenNewstipsComponent],
  exports: [FrozenNewstipsComponent]
})
export class FrozenNewstipsModule { }
