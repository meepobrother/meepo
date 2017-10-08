import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachShopinfoRoutingModule } from './coach-shopinfo-routing.module';
import { CoachShopinfoComponent } from './coach-shopinfo.component';

@NgModule({
  imports: [
    CommonModule,
    CoachShopinfoRoutingModule
  ],
  declarations: [CoachShopinfoComponent],
  providers: []
})
export class CoachShopinfoModule { }
