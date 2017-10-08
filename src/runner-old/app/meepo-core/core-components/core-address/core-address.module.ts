import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreAddressComponent } from './core-address.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddressSelectModule} from "../../../runner-components/address-select/address-select.module";
import {GeolocationModule} from "../../../runner-components/geolocation/geolocation.module";
import {TopNavModule} from "../../../runner-components/top-nav/top-nav.module";

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
    AddressSelectModule,
    ReactiveFormsModule,
      GeolocationModule,
      TopNavModule
  ],
  declarations: [CoreAddressComponent],
  exports: [CoreAddressComponent]
})
export class CoreAddressModule { }
