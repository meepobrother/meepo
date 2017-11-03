import { Component, OnInit, SkipSelf, Optional, EventEmitter, Output, Input } from '@angular/core';
import { MeepoAppService } from '../../app.service';
import { ApiService } from '../../../core/api';
@Component({
    selector: 'mc-icon-select',
    templateUrl: './mc-icon-select.html',
    styleUrls: ['./mc-icon-select.scss']
})
export class McIconSelect implements OnInit {
    meepo: MeepoAppService;
    @Output() onSelect: EventEmitter<any> = new EventEmitter();

    icons: any = [
        'el-icon-arrow-down',
        'el-icon-arrow-left',
        'el-icon-arrow-right',
        'el-icon-arrow-up',
        'el-icon-caret-bottom',
        'el-icon-caret-left',
        'el-icon-caret-right',
        'el-icon-caret-top',
        'el-icon-check',
        'el-icon-circle-check',
        'el-icon-circle-close',
        'el-icon-circle-cross',
        'el-icon-close',
        'el-icon-upload',
        'el-icon-d-arrow-left',
        'el-icon-d-arrow-right',
        'el-icon-d-caret',
        'el-icon-date',
        'el-icon-delete',
        'el-icon-document',
        'el-icon-edit',
        'el-icon-information',
        'el-icon-loading',
        'el-icon-menu',
        'el-icon-message',
        'el-icon-minus',
        'el-icon-more',
        'el-icon-picture',
        'el-icon-plus',
        'el-icon-search',
        'el-icon-setting',
        'el-icon-share',
        'el-icon-star-off',
        'el-icon-star-on',
        'el-icon-time',
        'el-icon-warning',
        'el-icon-delete2',
        'el-icon-upload2',
        'el-icon-view'
    ];

    title: string = 'info';
    size: string = 'tiny';
    visible: boolean = false;
    lock_scroll: boolean = true;
    top: string = '15%';
    msg: string = '';

    
    constructor(
        public api: ApiService
    ) { 
        this.meepo = MeepoAppService.api;
        this.meepo.showIconResDialogStream.subscribe((data: any) => {
            let { visible, title, size, top, lock_scroll, before_close, msg } = data;
            this.visible = visible ? true : false;
            this.title = title;
            this.size = size || 'small';
            this.top = top || '15%';
            this.lock_scroll = lock_scroll ? true : false;
            this.msg = msg;
        });
    }
    ngOnInit() {}
}