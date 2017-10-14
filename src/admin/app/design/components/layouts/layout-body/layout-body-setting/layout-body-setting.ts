import { Component, OnInit, Input } from '@angular/core';
import { LayoutBody } from '../layout-body';
@Component({
    selector: 'layout-body-setting',
    templateUrl: './layout-body-setting.html',
    styleUrls: ['./layout-body-setting.scss']
})
export class LayoutBodySetting implements OnInit {
    @Input() widget: LayoutBody = new LayoutBody();
    constructor() { }

    ngOnInit() { }
}
