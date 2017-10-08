import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAgileListComponent } from './h-agile-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HAgileListComponent],
  exports: [HAgileListComponent]
})
export class HAgileListModule { }
