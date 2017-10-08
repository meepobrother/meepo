import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardIndexRoutingModule } from './card-index-routing.module';
import { CardIndexComponent } from './card-index.component';
import {CardListModule} from "../card-list/card-list.module";

@NgModule({
  imports: [
    CommonModule,
    CardIndexRoutingModule,
    CardListModule
  ],
  declarations: [CardIndexComponent]
})
export class CardIndexModule { }
