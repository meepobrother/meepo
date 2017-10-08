import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkSelectComponent } from './link-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LinkSelectComponent],
  exports: [LinkSelectComponent]
})
export class LinkSelectModule { }
