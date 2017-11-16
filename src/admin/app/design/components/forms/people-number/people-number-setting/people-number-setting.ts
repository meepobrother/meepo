import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'people-num-setting',
    templateUrl: './people-num-setting.html',
    styleUrls: ['./people-num-setting.scss']
})
export class PeopleNumSetting implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}
