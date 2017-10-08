import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairRouterComponent } from './repair-router.component';
import {RouterModule} from "@angular/router";
import {FooterModule} from "../../runner-components/footer/footer.module";
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {ShopsService} from "services-components";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FooterModule,
    EditBtnModule
  ],
  declarations: [RepairRouterComponent],
  exports: [RepairRouterComponent],
  providers: [ShopsService]
})
export class RepairRouterModule { }
