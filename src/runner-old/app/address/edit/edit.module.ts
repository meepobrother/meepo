import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import {FormsModule} from "@angular/forms";
import {AddressEditModule} from "../../runner-components/address-edit/address-edit.module";

@NgModule({
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule,
    AddressEditModule
  ],
  declarations: [EditComponent]
})
export class AddressEditPageModule { }
