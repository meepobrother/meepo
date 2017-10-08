import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsListComponent } from './goods-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GoodsListComponent],
  exports: [GoodsListComponent]
})
export class GoodsListModule { }
