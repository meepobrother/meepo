import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'people-number-setting',
    templateUrl: './people-number-setting.html',
    styleUrls: ['./people-number-setting.scss']
})
export class PeopleNumSetting implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}
