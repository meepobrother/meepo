import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as store from 'store';

@Component({
    selector: 'im-message-view',
    templateUrl: './im-message-view.html',
    styleUrls: ['./im-message-view.scss']
})
export class ImMessageView implements OnInit {
    @Input() widget: any;
    constructor() { }
    ngOnInit() { }

    trackByFn(index, item) {
        return item.id
    }
}
