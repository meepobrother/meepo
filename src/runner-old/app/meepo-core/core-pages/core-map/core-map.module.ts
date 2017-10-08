import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreMapRoutingModule } from './core-map-routing.module';
import { CoreMapComponent } from './core-map.component';
import {AnimateModule} from "../../../runner-components/animate/animate.module";
import {GeolocationModule} from "../../../runner-components/geolocation/geolocation.module";
import {HomeMapPositionModule} from "../../../runner-components/home-map-position/home-map-position.module";
import {EditBtnModule} from '../../../runner-components/edit-btn/edit-btn.module';

@NgModule({
  imports: [
    CommonModule,
    CoreMapRoutingModule,
    AnimateModule,
    HomeMapPositionModule,
    GeolocationModule,
    EditBtnModule
  ],
  declarations: [CoreMapComponent]
})
export class CoreMapModule { }
