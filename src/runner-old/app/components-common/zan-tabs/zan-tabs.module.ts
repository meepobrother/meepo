import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZanTabsComponent } from './zan-tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ZanTabsComponent],
  exports: [ZanTabsComponent]
})
export class ZanTabsModule { }
