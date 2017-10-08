import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreQrcodeComponent } from './core-qrcode.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreQrcodeComponent],
  exports: [
    CoreQrcodeComponent
  ]
})
export class CoreQrcodeModule { }
