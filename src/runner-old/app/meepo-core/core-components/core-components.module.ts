import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModuleTagsComponent} from "./module-tags/module-tags.component";
import {CoreUtilService} from "../core-util.service";
import { TemplateSelectComponent } from './template-select/template-select.component';
import {ZanPopupModule} from "../../components-common/zan-popup/zan-popup.module";
import {NxTabbarModule} from "../../runner-components/nx-tabbar/nx-tabbar.module";
import { CoreScrollComponent } from './core-scroll/core-scroll.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ZanPopupModule,
    NxTabbarModule,
    EditBtnModule,
    FormsModule
  ],
  declarations: [TemplateSelectComponent, CoreScrollComponent,ModuleTagsComponent],
  exports: [TemplateSelectComponent,CoreScrollComponent,ModuleTagsComponent],
  providers: [CoreUtilService]
})
export class CoreComponentsModule { }
