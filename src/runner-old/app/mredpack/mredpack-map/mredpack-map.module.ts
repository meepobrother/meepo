import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MredpackMapRoutingModule } from './mredpack-map-routing.module';
import { MredpackMapComponent } from './mredpack-map.component';
import {GeolocationModule} from "../../runner-components/geolocation/geolocation.module";
import {AnimateModule} from "../../runner-components/animate/animate.module";

@NgModule({
  imports: [
    CommonModule,
    MredpackMapRoutingModule,
    GeolocationModule,
      AnimateModule
  ],
  declarations: [MredpackMapComponent]
})
export class MredpackMapModule { }
