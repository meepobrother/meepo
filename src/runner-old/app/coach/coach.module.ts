import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachRoutingComponent } from './coach-routing/coach-routing.component';
import {AdminModule} from "../admin/admin.module";
import {FooterModule} from "../runner-components/footer/footer.module";
import { EditBtnModule } from '../runner-components/edit-btn/edit-btn.module';
import { AlionModule } from '../runner-components/alion/alion.module';
import { IconSelectModule } from '../runner-components/icon-select/icon-select.module';
import {CoreUtilService} from '../meepo-core/core-util.service';
import {FormsModule} from '@angular/forms';
import {CoreComponentsModule} from '../meepo-core/core-components/core-components.module'

@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule,
    AdminModule,
    FooterModule,
    EditBtnModule,
    AlionModule,
    FormsModule,
    CoreComponentsModule,
    IconSelectModule
  ],
  declarations: [CoachRoutingComponent],
  providers: [CoreUtilService]
})
export class CoachModule { }
