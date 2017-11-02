import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SelectPageDialog } from '../components/setting/select-page-dialog';
import { ImageLinkTitleSelect } from '../components/setting/image-link-title-select/image-link-title-select';

import { MatDialog } from '@angular/material';
@Injectable()
export class AppService {

    // 语音库
    showAudioResDialogStream: Subject<any> = new Subject();
    // 图片库
    showImageResDialogStream: Subject<any> = new Subject();
    // 视频库
    showVideoResDialogStream: Subject<any> = new Subject();
    // 图标库
    showIconResDialogStream: Subject<any> = new Subject();
    // 颜色库
    showColorResDialogStream: Subject<any> = new Subject();
    // 日期选择
    showDateResDialogStream: Subject<any> = new Subject();
    // 地址选择
    showLocationResDialogStream: Subject<any> = new Subject();

    // 任务库
    showTasksResDialogStream: Subject<any> = new Subject();
    // 商品库
    showGoodsResDialogStream: Subject<any> = new Subject();
    // 会员库
    showMemberResDialogStream: Subject<any> = new Subject();
    // 门店库
    showShopResDialogStream: Subject<any> = new Subject();
    // 工单库
    showOrderResDialogStream: Subject<any> = new Subject();
    // 预约库
    showCoachResDialogStream: Subject<any> = new Subject();
    // 技能库
    showSkillResDialogStream: Subject<any> = new Subject();
    // 文章库
    showCmsResDialogStream: Subject<any> = new Subject();

    // 主题库
    showTemplateResDialogStream: Subject<any> = new Subject();
    // 插件库
    showPluginResDialogStream: Subject<any> = new Subject();

    constructor(
        public dialog: MatDialog
    ) { }


    selectPages(app_id?: number) {
        let dialogRef = this.dialog.open(SelectPageDialog, { data: { app_id: app_id } });
        return dialogRef.afterClosed();
    }

    imageLinkTitleSelectDialog(item?: any){
        //ImageLinkTitleSelect
        let dialogRef = this.dialog.open(ImageLinkTitleSelect, { data: item });
        return dialogRef.afterClosed();
    }

}