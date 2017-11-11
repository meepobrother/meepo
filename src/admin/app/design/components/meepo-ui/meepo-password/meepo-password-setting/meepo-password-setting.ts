import { Component, OnInit, Inject, Input } from '@angular/core';
import { MeepoPasswordDefault } from '../../../../classes';

@Component({
    selector: 'meepo-password-setting',
    templateUrl: './meepo-password-setting.html',
    styleUrls: ['./meepo-password-setting.scss']
})
export class MeepoPasswordSetting implements OnInit {
    @Input() widget: MeepoPasswordDefault = new MeepoPasswordDefault();
    constructor() { }

    ngOnInit() { }
}
