import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceHolderComponent } from './place-holder.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlaceHolderComponent],
  exports: [PlaceHolderComponent]
})
export class PlaceHolderModule { }
