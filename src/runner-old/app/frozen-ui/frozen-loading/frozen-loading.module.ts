import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenLoadingComponent } from './frozen-loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenLoadingComponent],
  exports: [FrozenLoadingComponent]
})
export class FrozenLoadingModule { }
