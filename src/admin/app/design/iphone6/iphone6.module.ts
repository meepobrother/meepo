import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iphone6Component } from './iphone6.component';
import { ApplicationService } from '../../share/services';
import { DndModule } from '../../components/dnd';
@NgModule({
  imports: [
    CommonModule,
    DndModule
  ],
  declarations: [Iphone6Component],
  exports: [Iphone6Component],
  providers: [ApplicationService]
})
export class Iphone6Module { }
