import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ElMessageService, ElNotificationService } from 'element-angular'
@Injectable()
export class MeepoAppService {
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

    // 操作提示
    
    showDialogStream: Subject<any> = new Subject();
    showToastStream: Subject<any> = new Subject();
    showTipStream: Subject<any> = new Subject();
    showLoadingStream: Subject<any> = new Subject();

    showAlertStream: Subject<any> = new Subject();
    hideAlertStream: Subject<any> = new Subject();

    showConfirmStream: Subject<any> = new Subject();
    hideConfirmStream: Subject<any> = new Subject();
    
    showMessageStream: Subject<any> = new Subject();
    closeMessageStream: Subject<any> = new Subject();

    showNotificationStream: Subject<any> = new Subject();
    closeNotificationStream: Subject<any> = new Subject();

    time: any = new Date().getTime();

    static api: any;

    constructor(
        public message: ElMessageService,
        public notify: ElNotificationService,
    ) {
        this.showMessageStream.subscribe((data: any) => {
            this.showMessage(data);
        });
        MeepoAppService.api = MeepoAppService.api || this;
    }

    showNotification(data: any) {
        let { type, duration, msg, iconClass, customClass, zIndex, offset } = data;
        type = type || 'show';
        duration = duration || 3000;
        iconClass = iconClass || '';
        customClass = customClass || '';
        zIndex = zIndex || 999;
        offset = offset || 15;

        this.notify.setOptions({
            duration: duration,
            iconClass: iconClass,
            customClass: customClass,
            zIndex: zIndex,
            offset: offset,
            onClose: () => {
                this.closeNotificationStream.next();
            }
        });

        this.notify[type](msg);
    }

    showMessage(data: any) {
        let { type, close, duration, center, msg, iconClass, customClass } = data;
        type = type || 'show';
        close = close ? true : false;
        duration = duration || 3000;
        iconClass = iconClass || '';
        customClass = customClass || '';
        center = center ? true : false;

        this.message.setOptions({
            showClose: close,
            duration: duration,
            iconClass: iconClass,
            customClass: customClass,
            center: center,
            onClose: () => {
                this.closeMessageStream.next();
            }
        });

        this.message[type](msg);
    }
}

