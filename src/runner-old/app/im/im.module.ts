import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImRoutingModule } from './im-routing.module';
import { ImComponent } from './im/im.component';
import {FooterModule} from "../runner-components/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    ImRoutingModule,
    FooterModule
  ],
  declarations: [ImComponent],
  exports: [ImComponent],
  providers: []
})
export class ImModule { }
