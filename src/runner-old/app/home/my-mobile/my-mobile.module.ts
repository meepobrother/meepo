import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMobileRoutingModule } from './my-mobile-routing.module';
import { MyMobileComponent } from './my-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    MyMobileRoutingModule
  ],
  declarations: [MyMobileComponent]
})
export class MyMobileModule { }
