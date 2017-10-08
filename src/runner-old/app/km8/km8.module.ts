import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Km8RoutingModule } from './km8-routing.module';
import { Km8RoutingComponent } from './km8-routing/km8-routing.component';

@NgModule({
  imports: [
    CommonModule,
    Km8RoutingModule
  ],
  declarations: [Km8RoutingComponent]
})
export class Km8Module { }
