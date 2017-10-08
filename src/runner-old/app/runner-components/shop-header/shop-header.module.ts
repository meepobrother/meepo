import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopHeaderComponent } from './shop-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShopHeaderComponent],
  exports: [ShopHeaderComponent]
})
export class ShopHeaderModule { }
