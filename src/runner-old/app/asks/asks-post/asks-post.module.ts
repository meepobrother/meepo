import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksPostRoutingModule } from './asks-post-routing.module';
import { AsksPostComponent } from './asks-post.component';

@NgModule({
  imports: [
    CommonModule,
    AsksPostRoutingModule
  ],
  declarations: [AsksPostComponent]
})
export class AsksPostModule { }
