import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiaoshaIndexRoutingModule } from './miaosha-index-routing.module';
import { MiaoshaIndexComponent } from './miaosha-index.component';
import {MiaoshaListModule} from "../miaosha-list/miaosha-list.module";

@NgModule({
  imports: [
    CommonModule,
    MiaoshaIndexRoutingModule,
    MiaoshaListModule
  ],
  declarations: [MiaoshaIndexComponent]
})
export class MiaoshaIndexModule { }
