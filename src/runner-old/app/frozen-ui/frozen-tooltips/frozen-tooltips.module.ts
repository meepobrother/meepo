import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenTooltipsComponent } from './frozen-tooltips.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrozenTooltipsComponent],
  exports: [FrozenTooltipsComponent]
})
export class FrozenTooltipsModule { }
