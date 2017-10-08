import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenHeaderComponent } from './frozen-header.component';
import {AlionModule} from "../../runner-components/alion/alion.module";

@NgModule({
  imports: [
    CommonModule,
    AlionModule
  ],
  declarations: [FrozenHeaderComponent],
  exports: [FrozenHeaderComponent]
})
export class FrozenHeaderModule { }
