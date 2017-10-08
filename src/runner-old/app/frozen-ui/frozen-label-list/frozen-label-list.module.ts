import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenLabelListComponent } from './frozen-label-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenLabelListComponent],
  exports: [FrozenLabelListComponent]
})
export class FrozenLabelListModule { }
