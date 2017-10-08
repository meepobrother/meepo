import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminFooterComponent} from "./admin-footer.component";
import {FooterModule} from "../footer/footer.module";
import {GlobalService} from "services-components/src/app/utils/global.service";
@NgModule({
  imports: [
    CommonModule,
    FooterModule
  ],
  declarations: [AdminFooterComponent],
  exports: [AdminFooterComponent],
  providers: [GlobalService]
})
export class AdminFooterModule { }
