import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HmBoxDefault } from '../../../../classes';

@Component({
    selector: 'hm-box-setting',
    templateUrl: './hm-box-setting.html',
    styleUrls: ['./hm-box-setting.scss']
})
export class HmBoxSetting implements OnInit {
    @Input() widget: HmBoxDefault = new HmBoxDefault();
    constructor() { }
    ngOnInit() { }
}
