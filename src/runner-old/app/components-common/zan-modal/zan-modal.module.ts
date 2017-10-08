import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZanModalComponent } from './zan-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ZanModalComponent],
  exports: [ZanModalComponent]
})
export class ZanModalModule { }
