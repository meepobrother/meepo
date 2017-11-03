import { Component, OnInit } from '@angular/core';
import { MeepoAppService } from '../../app.service';
@Component({
    selector: 'me-alert',
    templateUrl: './me-alert.html',
    styleUrls: ['./me-alert.scss']
})
export class MeAlert implements OnInit {
    title: string = 'info';
    size: string = 'tiny';
    visible: boolean = true;
    lock_scroll: boolean = true;
    top: string = '15%';
    msg: string = '';

    onClose: any = (e: any)=>{
        this.meepo.showAlertStream.next({
            visible: false
        });
        this.meepo.hideAlertStream.next(e);
    }

    constructor(
        public meepo: MeepoAppService
    ) {
        this.meepo.showAlertStream.subscribe((data: any) => {
            let { visible, title, size, top, lock_scroll, before_close, msg } = data;
            this.visible = visible ? true : false;
            this.title = title;
            this.size = size || 'small';
            this.top = top || '15%';
            this.lock_scroll = lock_scroll ? true: false;
            this.msg = msg;

            console.log(title);
            console.log(msg);
            
        });
    }

    ngOnInit() { }
}