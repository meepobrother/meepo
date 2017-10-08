import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlionComponent} from "./alion.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlionComponent],
  exports: [AlionComponent]
})
export class AlionModule { }
