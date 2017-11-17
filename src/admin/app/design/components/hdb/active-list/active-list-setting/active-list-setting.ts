import { Component, OnInit, Input } from '@angular/core';
import { ActiveListDefault } from '../../../../classes';
@Component({
    selector: 'active-list-setting',
    templateUrl: './active-list-setting.html',
    styleUrls: ['./active-list-setting.scss']
})
export class ActiveListSetting implements OnInit {
    @Input() widget: ActiveListDefault = new ActiveListDefault();
    constructor() { }

    ngOnInit() { }
}