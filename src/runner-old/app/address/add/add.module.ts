import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import {FormsModule} from "@angular/forms";
import {AddressAddModule} from "../../runner-components/address-add/address-add.module";

@NgModule({
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule,
    AddressAddModule
  ],
  declarations: [AddComponent]
})
export class AddressAddPageModule { }
