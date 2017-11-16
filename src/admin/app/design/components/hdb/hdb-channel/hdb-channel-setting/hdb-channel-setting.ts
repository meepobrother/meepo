import { Component, OnInit, Input } from '@angular/core';
import { HdbChannelDefault } from '../../../../classes';
@Component({
    selector: 'hdb-channel-setting',
    templateUrl: './hdb-channel-setting.html',
    styleUrls: ['./hdb-channel-setting.scss']
})
export class HdbChannelSetting implements OnInit {
    @Input() widget: HdbChannelDefault = new HdbChannelDefault();
    constructor() { }

    ngOnInit() { }
}