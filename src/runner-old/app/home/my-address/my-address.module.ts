import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAddressRoutingModule } from './my-address-routing.module';
import { MyAddressComponent } from './my-address.component';
import {RunnerServicesModule} from 'services-components';

@NgModule({
  imports: [
    CommonModule,
    MyAddressRoutingModule,
    RunnerServicesModule
  ],
  declarations: [MyAddressComponent]
})
export class MyAddressModule { }
