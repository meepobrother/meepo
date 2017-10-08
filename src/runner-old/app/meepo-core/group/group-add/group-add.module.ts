import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupAddRoutingModule } from './group-add-routing.module';
import { GroupAddComponent } from './group-add.component';
import {FormsModule} from "@angular/forms";
import {CoreComponentsModule} from "../../core-components/core-components.module";

@NgModule({
  imports: [
    CommonModule,
    GroupAddRoutingModule,
    FormsModule,
    CoreComponentsModule
  ],
  declarations: [GroupAddComponent]
})
export class GroupAddModule { }
