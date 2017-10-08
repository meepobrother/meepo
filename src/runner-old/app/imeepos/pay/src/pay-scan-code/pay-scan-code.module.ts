import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayScanCodeComponent } from './pay-scan-code.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PayScanCodeComponent],
  exports: [PayScanCodeComponent]
})
export class PayScanCodeModule { }
