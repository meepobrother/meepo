import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { ShopsItemComponent } from './shops-item/shops-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShopsListComponent, ShopsItemComponent],
  exports: [ShopsListComponent, ShopsItemComponent]
})
export class ShopsListModule { }
