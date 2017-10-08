import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeepSelectComponent } from './deep-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeepSelectComponent],
  exports: [DeepSelectComponent]
})
export class DeepSelectModule { }
