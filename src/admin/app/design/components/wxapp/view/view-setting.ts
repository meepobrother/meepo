import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'view-setting',
    templateUrl: './view-setting.html',
    styleUrls: ['./view-setting.scss']
})
export class ViewSetting implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}
