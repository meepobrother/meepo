import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInfoRoutingModule } from './my-info-routing.module';
import { MyInfoComponent } from './my-info.component';
import {AlionModule} from "../../runner-components/alion/alion.module";

@NgModule({
  imports: [
    CommonModule,
    MyInfoRoutingModule,
    AlionModule
  ],
  declarations: [MyInfoComponent]
})
export class MyInfoModule { }
