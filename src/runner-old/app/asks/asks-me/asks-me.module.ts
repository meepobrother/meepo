import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksMeRoutingModule } from './asks-me-routing.module';
import { AsksMeComponent } from './asks-me.component';

@NgModule({
  imports: [
    CommonModule,
    AsksMeRoutingModule
  ],
  declarations: [AsksMeComponent]
})
export class AsksMeModule { }
