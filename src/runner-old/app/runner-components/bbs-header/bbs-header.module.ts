import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BbsHeaderComponent } from './bbs-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BbsHeaderComponent],
  exports: [BbsHeaderComponent]
})
export class BbsHeaderModule { }
