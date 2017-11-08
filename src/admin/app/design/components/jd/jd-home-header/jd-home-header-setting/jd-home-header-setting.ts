import { Component, OnInit, Input } from '@angular/core';
import { JdHomeHeaderDefault } from '../../../../classes';
import * as store from 'store';
@Component({
    selector: 'jd-home-header-setting',
    templateUrl: './jd-home-header-setting.html',
    styleUrls: ['./jd-home-header-setting.scss']
})
export class JdHomeHeaderSetting implements OnInit {
    @Input() widget: JdHomeHeaderDefault = new JdHomeHeaderDefault();
    constructor() { }

    ngOnInit() { }
}
