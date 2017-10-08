import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImIndexRoutingModule } from './im-index-routing.module';
import { ImIndexComponent } from './im-index.component';
import {ImListModule} from "../im-list/im-list.module";

@NgModule({
  imports: [
    CommonModule,
    ImIndexRoutingModule,
    ImListModule
  ],
  declarations: [ImIndexComponent]
})
export class ImIndexModule { }
