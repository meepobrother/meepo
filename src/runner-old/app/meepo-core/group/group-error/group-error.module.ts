import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupErrorRoutingModule } from './group-error-routing.module';
import { GroupErrorComponent } from './group-error.component';

@NgModule({
  imports: [
    CommonModule,
    GroupErrorRoutingModule
  ],
  declarations: [GroupErrorComponent]
})
export class GroupErrorModule { }
