import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayRecordComponent } from './pay-record.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PayRecordComponent],
  exports: [PayRecordComponent]
})
export class PayRecordModule { }
