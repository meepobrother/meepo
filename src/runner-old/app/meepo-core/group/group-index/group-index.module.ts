import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupIndexRoutingModule } from './group-index-routing.module';
import { GroupIndexComponent } from './group-index.component';

@NgModule({
  imports: [
    CommonModule,
    GroupIndexRoutingModule
  ],
  declarations: [GroupIndexComponent]
})
export class GroupIndexModule { }
