import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairShopJoinRoutingModule } from './repair-shop-join-routing.module';
import { RepairShopJoinComponent } from './repair-shop-join.component';

@NgModule({
  imports: [
    CommonModule,
    RepairShopJoinRoutingModule
  ],
  declarations: [RepairShopJoinComponent]
})
export class RepairShopJoinModule { }
