import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VanQuantityComponent } from './van-quantity.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [VanQuantityComponent],
  exports: [VanQuantityComponent]
})
export class ZanQuantityModule { }
