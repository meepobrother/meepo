import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryComponent],
  exports: [CategoryComponent]
})
export class CategoryModule { }
