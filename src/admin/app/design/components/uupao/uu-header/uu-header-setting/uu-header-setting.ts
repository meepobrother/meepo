import { Component, OnInit, Input } from '@angular/core';
import { UuHeaderDefault } from '../../../../classes';

@Component({
    selector: 'uu-header-setting',
    templateUrl: './uu-header-setting.html',
    styleUrls: ['./uu-header-setting.scss']
})
export class UuHeaderSetting implements OnInit {
    @Input() widget: UuHeaderDefault = new UuHeaderDefault();
    
    constructor() { }

    ngOnInit() { }
}