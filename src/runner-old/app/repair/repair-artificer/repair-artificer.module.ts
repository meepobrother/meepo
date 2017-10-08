import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairArtificerRoutingModule } from './repair-artificer-routing.module';
import { RepairArtificerComponent } from './repair-artificer.component';

@NgModule({
  imports: [
    CommonModule,
    RepairArtificerRoutingModule
  ],
  declarations: [RepairArtificerComponent]
})
export class RepairArtificerModule { }
