import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group/group.component';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule
  ],
  declarations: [GroupComponent]
})
export class GroupModule { }
