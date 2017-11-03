import { Component, OnInit, SkipSelf, Optional } from '@angular/core';
import { MeepoAppService } from '../../app.service';
@Component({
    selector: 'me-confirm',
    templateUrl: './me-confirm.html',
    styleUrls: ['./me-confirm.scss']
})
export class MeConfirm implements OnInit {
    title: string = 'info';
    size: string = 'tiny';
    visible: boolean = false;
    lock_scroll: boolean = true;
    top: string = '15%';
    msg: string = '';

    meepo: MeepoAppService;

    onClose: any = (e: any) => {
        this.meepo.showConfirmStream.next({
            visible: false
        });
        this.meepo.hideConfirmStream.next(e);
    }

    constructor() {
        this.meepo = MeepoAppService.api;
        this.meepo.showConfirmStream.subscribe((data: any) => {
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

    hide(){
        this.onClose();
    }
}