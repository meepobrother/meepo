import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairWelcomeRoutingModule } from './repair-welcome-routing.module';
import { RepairWelcomeComponent } from './repair-welcome.component';
import {ShopsService} from 'services-components';

@NgModule({
  imports: [
    CommonModule,
    RepairWelcomeRoutingModule
  ],
  declarations: [RepairWelcomeComponent],
  providers: [ShopsService]
})
export class RepairWelcomeModule { }
