import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DateService } from './date.service';
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
        public date: DateService
    ){}

    savePage(){
        this.date.saveDate();
    }

}