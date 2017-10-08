import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarginListComponent } from './bargin-list/bargin-list.component';
import { BarginItemComponent } from './bargin-item/bargin-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BarginListComponent, BarginItemComponent],
  exports: [BarginListComponent, BarginItemComponent]
})
export class BarginListModule { }
