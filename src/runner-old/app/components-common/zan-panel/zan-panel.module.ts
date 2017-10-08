import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZanPanelComponent } from './zan-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ZanPanelComponent],
  exports: [ZanPanelComponent]
})
export class ZanPanelModule { }
