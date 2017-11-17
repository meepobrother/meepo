import { Component, OnInit, Input } from '@angular/core';
import { HdbChannelDefault } from '../../../../classes';
@Component({
    selector: 'hdb-channel-view',
    templateUrl: './hdb-channel-view.html',
    styleUrls: ['./hdb-channel-view.scss']
})
export class HdbChannelView implements OnInit {
    @Input() widget: HdbChannelDefault = new HdbChannelDefault();
    constructor() { }

    ngOnInit() { }
}