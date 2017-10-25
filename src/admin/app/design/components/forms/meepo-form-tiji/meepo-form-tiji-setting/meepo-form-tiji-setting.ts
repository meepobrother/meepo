import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormTijiDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-tiji-setting',
    templateUrl: './meepo-form-tiji-setting.html',
    styleUrls: ['./meepo-form-tiji-setting.scss']
})
export class MeepoFormTijiSetting implements OnInit {
    @Input() widget: MeepoFormTijiDefault = new MeepoFormTijiDefault();
    constructor() { }

    ngOnInit() { }
}
