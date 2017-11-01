import { Component, OnInit, Input } from '@angular/core';
import { UuConDefault } from '../../../../classes';
@Component({
    selector: 'uu-con-setting',
    templateUrl: './uu-con-setting.html',
    styleUrls: ['./uu-con-setting.scss']
})
export class UuConSetting implements OnInit {
    @Input() widget: UuConDefault = new UuConDefault();
    constructor() { }

    ngOnInit() { }
}