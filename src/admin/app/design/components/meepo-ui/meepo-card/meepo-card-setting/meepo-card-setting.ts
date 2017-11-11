import { Component, OnInit, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { MeepoCardDefault } from '../../../../classes';

@Component({
    selector: 'meepo-card-setting',
    templateUrl: './meepo-card-setting.html',
    styleUrls: ['./meepo-card-setting.scss']
})
export class MeepoCardSetting implements OnInit {
    @Input() widget: MeepoCardDefault = new MeepoCardDefault();
    constructor() { }
    ngOnInit() { }
}
