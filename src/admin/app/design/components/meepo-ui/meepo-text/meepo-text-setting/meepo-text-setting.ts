import { Component, OnInit, Input } from '@angular/core';
import {MeepoTextDefault} from '../../../../classes';
@Component({
    selector: 'meepo-text-setting',
    templateUrl: './meepo-text-setting.html',
    styleUrls: ['./meepo-text-setting.scss']
})
export class MeepoTextSetting implements OnInit {
    @Input() widget: MeepoTextDefault = new MeepoTextDefault();
    constructor() { }

    ngOnInit() { }
}
