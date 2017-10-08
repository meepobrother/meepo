import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeolocationComponent} from "./geolocation.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GeolocationComponent],
  exports: [GeolocationComponent]
})
export class GeolocationModule { }
