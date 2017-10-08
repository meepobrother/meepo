import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImMemberRoutingModule } from './im-member-routing.module';
import { ImMemberComponent } from './im-member.component';
import {GeolocationModule} from "../../runner-components/geolocation/geolocation.module";
import {ImListModule} from "../im-list/im-list.module";
import {CoreComponentsModule} from "../../meepo-core/core-components/core-components.module";

@NgModule({
  imports: [
    CommonModule,
    ImMemberRoutingModule,
    GeolocationModule,
    ImListModule,
    CoreComponentsModule
  ],
  declarations: [ImMemberComponent]
})
export class ImMemberModule { }
