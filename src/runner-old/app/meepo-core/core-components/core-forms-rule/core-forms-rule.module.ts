import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreFormsRuleComponent } from './core-forms-rule.component';
import {FormsModule} from "@angular/forms";
import {WhiteSpaceModule} from "../../core/white-space/white-space.module";
import {SettingTianqiModule} from "../../../runner-components/setting-tianqi/setting-tianqi.module";
import {SettingJuliModule} from "../../../runner-components/setting-juli/setting-juli.module";
import {SettingWeightModule} from "../../../runner-components/setting-weight/setting-weight.module";
import {SettingTimeModule} from "../../../runner-components/setting-time/setting-time.module";
import {TopNavModule} from "../../../runner-components/top-nav/top-nav.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WhiteSpaceModule,
    SettingTianqiModule,
    SettingJuliModule,
    SettingWeightModule,
    SettingTimeModule,
    TopNavModule
  ],
  declarations: [CoreFormsRuleComponent],
  exports: [CoreFormsRuleComponent]
})
export class CoreFormsRuleModule { }
