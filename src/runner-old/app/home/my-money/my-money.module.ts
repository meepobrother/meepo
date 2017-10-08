import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMoneyRoutingModule } from './my-money-routing.module';
import { MyMoneyComponent } from './my-money.component';
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";

@NgModule({
  imports: [
    CommonModule,
    MyMoneyRoutingModule,
    TopNavModule
  ],
  declarations: [MyMoneyComponent]
})
export class MyMoneyModule { }
