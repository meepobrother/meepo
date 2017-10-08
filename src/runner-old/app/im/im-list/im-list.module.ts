import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImMyMessageComponent } from './im-my-message/im-my-message.component';
import { ImOtherMessageComponent } from './im-other-message/im-other-message.component';
import { ImItemComponent } from './im-item/im-item.component';
import { ImSystemMessageComponent } from './im-system-message/im-system-message.component';
import { ImFooterComponent } from './im-footer/im-footer.component';
import { ImMessageListComponent } from './im-message-list/im-message-list.component';
import {FormsModule} from "@angular/forms";
import {AlionModule} from "../../runner-components/alion/alion.module";
import { ImReddpackComponent } from './im-reddpack/im-reddpack.component';
import { ImShoukuanComponent } from './im-shoukuan/im-shoukuan.component';
import { ImLocationComponent } from './im-location/im-location.component';
import {LocpickerModule} from "../../runner-components/locpicker/locpicker.module";
import { ImMessageContentComponent } from './im-message-content/im-message-content.component';
import { ImVideoComponent } from './im-video/im-video.component';
import { ImVioceComponent } from './im-vioce/im-vioce.component';
import {WechatAudioModule} from "../../runner-components/wechat-audio/wechat-audio.module";
import { ImImageComponent } from './im-image/im-image.component';
import {UploaderModule} from "../../runner-components/uploader/uploader.module";
import {SwiperModule} from "../../runner-components/swiper/swiper.module";
import { ImTaskComponent } from './im-task/im-task.component';
import { ImCardComponent } from './im-card/im-card.component';
import {OrderCreateModule} from "../../runner-components/order-create/order-create.module";
import { ImShoukuanTagComponent } from './im-shoukuan-tag/im-shoukuan-tag.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {ZanRadiosModule} from "../../components-common/zan-radios/com-radios.module";
import {CoreFormsViewModule} from "../../meepo-core/core-components/core-forms-view/core-forms-view.module";

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      AlionModule,
      LocpickerModule,
      WechatAudioModule,
      UploaderModule,
      SwiperModule,
      OrderCreateModule,
      EditBtnModule,
      ZanRadiosModule,
      CoreFormsViewModule
  ],
  declarations: [
    ImMyMessageComponent,
    ImOtherMessageComponent,
    ImItemComponent,
    ImSystemMessageComponent,
    ImFooterComponent,
    ImMessageListComponent,
    ImReddpackComponent,
    ImShoukuanComponent,
    ImLocationComponent,
    ImMessageContentComponent,
    ImVideoComponent,
    ImVioceComponent,
    ImImageComponent,
    ImTaskComponent,
    ImCardComponent,
    ImShoukuanTagComponent
  ],
  exports: [
    ImMyMessageComponent,
    ImOtherMessageComponent,
    ImItemComponent,
    ImSystemMessageComponent,
    ImFooterComponent,
    ImMessageListComponent,
    ImReddpackComponent,
    ImShoukuanComponent,
    ImLocationComponent,
    ImMessageContentComponent,
    ImVideoComponent,
    ImVioceComponent,
    ImImageComponent,
    ImTaskComponent,
    ImCardComponent
  ]
})
export class ImListModule { }
