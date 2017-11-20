import { Component, OnInit, Input } from '@angular/core';
import { ImFooterDefault } from '../../../../classes';

@Component({
    selector: 'im-footer-setting',
    templateUrl: './im-footer-setting.html',
    styleUrls: ['./im-footer-setting.scss']
})
export class ImFooterSetting implements OnInit {
    @Input() widget: ImFooterDefault = new ImFooterDefault();
    constructor() { }

    ngOnInit() { }
}
