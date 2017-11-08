import { Component, OnInit, Input } from '@angular/core';
import { JdHomeListDefault } from '../../../../classes';

@Component({
    selector: 'jd-home-list-setting',
    templateUrl: './jd-home-list-setting.html',
    styleUrls: ['./jd-home-list-setting.scss']
})
export class JdHomeListSetting implements OnInit {
    @Input() widget: JdHomeListDefault = new JdHomeListDefault();
    constructor() { }

    ngOnInit() { }
}
