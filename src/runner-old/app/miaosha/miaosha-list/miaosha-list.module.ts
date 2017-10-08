import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiaoshaListComponent } from './miaosha-list/miaosha-list.component';
import { MiaoshaItemComponent } from './miaosha-item/miaosha-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MiaoshaListComponent, MiaoshaItemComponent],
  exports: [MiaoshaListComponent, MiaoshaItemComponent]
})
export class MiaoshaListModule { }
