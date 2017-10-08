import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexItemComponent } from './flex-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlexItemComponent],
  exports: [FlexItemComponent]
})
export class FlexItemModule { }
