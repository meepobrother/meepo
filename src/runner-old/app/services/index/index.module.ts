import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {ServicesListModule} from "../services-list/services-list.module";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    ServicesListModule
  ],
  declarations: [IndexComponent]
})
export class ServicesIndexModule { }
