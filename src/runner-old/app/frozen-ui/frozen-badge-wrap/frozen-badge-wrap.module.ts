import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenBadgeWrapComponent } from './frozen-badge-wrap.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenBadgeWrapComponent],
  exports: [FrozenBadgeWrapComponent]
})
export class FrozenBadgeWrapModule { }
