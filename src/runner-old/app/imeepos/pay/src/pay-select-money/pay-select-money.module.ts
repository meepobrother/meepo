import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaySelectMoneyComponent } from './pay-select-money.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaySelectMoneyComponent],
  exports: [PaySelectMoneyComponent]
})
export class PaySelectMoneyModule { }
