import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenDialogComponent } from './frozen-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenDialogComponent],
  exports: [FrozenDialogComponent]
})
export class FrozenDialogModule { }
