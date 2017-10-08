import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuyunListComponent } from './suyun-list/suyun-list.component';
import { SuyunItemComponent } from './suyun-item/suyun-item.component';
import { SuyunTagComponent } from './suyun-tag/suyun-tag.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";
import { SuyunLouTagComponent } from './suyun-lou-tag/suyun-lou-tag.component';
import { SuyunCheTagComponent } from './suyun-che-tag/suyun-che-tag.component';
import {ZanRadiosModule} from "../../components-common/zan-radios/com-radios.module";

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
    FormsModule,
    ZanRadiosModule
  ],
  declarations: [SuyunListComponent, SuyunItemComponent, SuyunTagComponent, SuyunLouTagComponent, SuyunCheTagComponent],
  exports: [SuyunListComponent, SuyunItemComponent,SuyunTagComponent,SuyunLouTagComponent,SuyunCheTagComponent]
})
export class SuyunListModule { }
