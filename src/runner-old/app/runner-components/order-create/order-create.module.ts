import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCreateComponent } from './order-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderCreateComponent],
  exports: [OrderCreateComponent]
})
export class OrderCreateModule { }
