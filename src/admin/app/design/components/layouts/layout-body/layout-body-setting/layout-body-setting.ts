import { Component, OnInit, Input } from '@angular/core';
import { LayoutBody } from '../../../../classes';
@Component({
    selector: 'layout-body-setting',
    templateUrl: './layout-body-setting.html',
    styleUrls: ['./layout-body-setting.scss']
})
export class LayoutBodySetting implements OnInit {
    @Input() widget: LayoutBody = new LayoutBody();
    constructor() { }

    ngOnInit() { }

    clear() {
        this.widget.children = [];
    }
}
