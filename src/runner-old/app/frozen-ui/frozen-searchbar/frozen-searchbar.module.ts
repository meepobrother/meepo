import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenSearchbarComponent } from './frozen-searchbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenSearchbarComponent],
  exports: [FrozenSearchbarComponent]
})
export class FrozenSearchbarModule { }
