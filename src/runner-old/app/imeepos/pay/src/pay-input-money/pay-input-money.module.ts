import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayInputMoneyComponent } from './pay-input-money.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PayInputMoneyComponent],
  exports: [PayInputMoneyComponent]
})
export class PayInputMoneyModule { }
