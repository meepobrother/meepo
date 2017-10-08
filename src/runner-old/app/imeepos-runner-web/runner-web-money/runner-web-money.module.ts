import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerWebMoneyRoutingModule } from './runner-web-money-routing.module';
import { RunnerWebMoneyComponent } from './runner-web-money.component';

@NgModule({
  imports: [
    CommonModule,
    RunnerWebMoneyRoutingModule
  ],
  declarations: [RunnerWebMoneyComponent]
})
export class RunnerWebMoneyModule { }
