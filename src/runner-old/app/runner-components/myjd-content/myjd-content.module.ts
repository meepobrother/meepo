import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyjdContentComponent } from './myjd-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyjdContentComponent],
  exports: [MyjdContentComponent]
})
export class MyjdContentModule { }
