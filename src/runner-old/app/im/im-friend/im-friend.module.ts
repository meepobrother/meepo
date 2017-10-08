import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImFriendRoutingModule } from './im-friend-routing.module';
import { ImFriendComponent } from './im-friend.component';
import {ImListModule} from "../im-list/im-list.module";
import {GeolocationModule} from "../../runner-components/geolocation/geolocation.module";

@NgModule({
  imports: [
    CommonModule,
    ImFriendRoutingModule,
      ImListModule,
      GeolocationModule
  ],
  declarations: [ImFriendComponent]
})
export class ImFriendModule { }
