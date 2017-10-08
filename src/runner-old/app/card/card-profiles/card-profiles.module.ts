import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardProfilesRoutingModule } from './card-profiles-routing.module';
import { CardProfilesComponent } from './card-profiles.component';

@NgModule({
  imports: [
    CommonModule,
    CardProfilesRoutingModule
  ],
  declarations: [CardProfilesComponent]
})
export class CardProfilesModule { }
