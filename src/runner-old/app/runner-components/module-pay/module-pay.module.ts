import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePayComponent } from './module-pay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModulePayComponent],
  exports: [ModulePayComponent]
})
export class ModulePayModule { }
