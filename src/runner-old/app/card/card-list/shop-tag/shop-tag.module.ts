import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopTagComponent } from './shop-tag.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ShopTagComponent],
  exports: [ShopTagComponent]
})
export class ShopTagModule { }
