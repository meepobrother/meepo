import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreButtonComponent } from './core-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreButtonComponent],
  exports: [CoreButtonComponent]
})
export class CoreButtonModule { }
