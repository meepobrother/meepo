import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairServicesRoutingModule } from './repair-services-routing.module';
import { RepairServicesComponent } from './repair-services.component';

@NgModule({
  imports: [
    CommonModule,
    RepairServicesRoutingModule
  ],
  declarations: [RepairServicesComponent]
})
export class RepairServicesModule { }
