import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsIndexRoutingModule } from './shops-index-routing.module';
import { ShopsIndexComponent } from './shops-index.component';
import {ShopsListModule} from "../shops-list/shops-list.module";

@NgModule({
  imports: [
    CommonModule,
    ShopsIndexRoutingModule,
    ShopsListModule
  ],
  declarations: [ShopsIndexComponent]
})
export class ShopsIndexModule { }
