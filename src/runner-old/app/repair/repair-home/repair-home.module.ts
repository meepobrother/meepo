import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairHomeRoutingModule } from './repair-home-routing.module';
import { RepairHomeComponent } from './repair-home.component';

@NgModule({
  imports: [
    CommonModule,
    RepairHomeRoutingModule
  ],
  declarations: [RepairHomeComponent]
})
export class RepairHomeModule { }
