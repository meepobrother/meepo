import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressSelectComponent} from "./address-select.component";
import {AddressAddModule} from "../address-add/address-add.module";
import {TopNavModule} from "../top-nav/top-nav.module";

@NgModule({
  imports: [
    CommonModule,
    AddressAddModule,
    TopNavModule
  ],
  declarations: [AddressSelectComponent],
  exports: [AddressSelectComponent],
  providers: []
})
export class AddressSelectModule { }
