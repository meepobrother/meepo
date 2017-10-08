import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZanIconComponent } from './zan-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ZanIconComponent],
  exports:[ZanIconComponent]
})
export class ZanIconModule { }
