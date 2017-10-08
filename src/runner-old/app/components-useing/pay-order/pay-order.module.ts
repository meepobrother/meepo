import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayOrderComponent } from './pay-order.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PayOrderComponent],
  exports: [PayOrderComponent]
})
export class PayOrderModule { }
