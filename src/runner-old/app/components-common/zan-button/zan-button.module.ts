import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZanButtonComponent } from './zan-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ZanButtonComponent],
  exports: [ZanButtonComponent]
})
export class ZanButtonModule { }
