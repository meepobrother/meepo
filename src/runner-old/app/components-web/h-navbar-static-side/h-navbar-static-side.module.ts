import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HNavbarStaticSideComponent } from './h-navbar-static-side.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HNavbarStaticSideComponent],
  exports: [HNavbarStaticSideComponent]
})
export class HNavbarStaticSideModule { }
