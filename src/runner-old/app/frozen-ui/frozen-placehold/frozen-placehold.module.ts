import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenPlaceholdComponent } from './frozen-placehold.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenPlaceholdComponent],
  exports: [FrozenPlaceholdComponent]
})
export class FrozenPlaceholdModule { }
