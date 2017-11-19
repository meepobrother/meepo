import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as store from 'store';
import { ImMessageDefault } from '../../../../classes';
import { ApiService } from '../../../../../core/api';
@Component({
    selector: 'im-message-view',
    templateUrl: './im-message-view.html',
    styleUrls: ['./im-message-view.scss']
})
export class ImMessageView implements OnInit {
    @Input() widget: ImMessageDefault = new ImMessageDefault();
    _openid: any;
    items: any[];

    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this._openid = store.get('__meepo_openid', 'system');
        this.api.mpost('message.getUnread', {}).subscribe((res: any) => {
            this.items = res.info;
        });
    }
}
