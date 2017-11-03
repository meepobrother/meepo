import { Component, OnInit, SkipSelf, Optional } from '@angular/core';
import { MeepoAppService } from '../../app.service';
@Component({
    selector: 'me-alert',
    templateUrl: './me-alert.html',
    styleUrls: ['./me-alert.scss']
})
export class MeAlert implements OnInit {
    title: string = 'info';
    size: string = 'tiny';
    visible: boolean = false;
    lock_scroll: boolean = true;
    top: string = '15%';
    msg: string = '';

    meepo: MeepoAppService;

    onClose: any = (e: any) => {
        this.meepo.showAlertStream.next({
            visible: false
        });
        this.meepo.hideAlertStream.next(e);
    }

    constructor() {
        this.meepo = MeepoAppService.api;
        this.meepo.showAlertStream.subscribe((data: any) => {
            let { visible, title, size, top, lock_scroll, before_close, msg } = data;
            this.visible = visible ? true : false;
            this.title = title;
            this.size = size || 'small';
            this.top = top || '15%';
            this.lock_scroll = lock_scroll ? true : false;
            this.msg = msg;
        });
    }

    ngOnInit() { }
}