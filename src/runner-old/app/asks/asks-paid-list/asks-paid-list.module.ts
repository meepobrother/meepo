import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksPaidListRoutingModule } from './asks-paid-list-routing.module';
import {AsksPaidListComponent} from "./asks-paid-list.component";

@NgModule({
  imports: [
    CommonModule,
    AsksPaidListRoutingModule
  ],
  declarations: [AsksPaidListComponent]
})
export class AsksPaidListModule { }
