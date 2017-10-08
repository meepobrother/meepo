import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrozenListLinkComponent } from './frozen-list-link.component';
import {FrozenLoadingModule} from "../frozen-loading/frozen-loading.module";

@NgModule({
  imports: [
    CommonModule,
    FrozenLoadingModule
  ],
  declarations: [FrozenListLinkComponent],
  exports: [FrozenListLinkComponent]
})
export class FrozenListLinkModule { }
