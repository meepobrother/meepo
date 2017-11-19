import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as store from 'store';

@Component({
    selector: 'im-message-setting',
    templateUrl: './im-message-setting.html',
    styleUrls: ['./im-message-setting.scss']
})
export class ImMessageSetting implements OnInit {
    @Input() widget: any;
    constructor() { }
    ngOnInit() { }
}
