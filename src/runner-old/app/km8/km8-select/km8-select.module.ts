import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Km8SelectRoutingModule } from './km8-select-routing.module';
import { Km8SelectComponent } from './km8-select.component';
import {Km8ListModule} from "../km8-list/km8-list.module";

@NgModule({
  imports: [
    CommonModule,
    Km8SelectRoutingModule,
    Km8ListModule
  ],
  declarations: [Km8SelectComponent]
})
export class Km8SelectModule { }
