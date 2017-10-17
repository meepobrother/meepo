import { Component, OnInit, Input } from '@angular/core';
import { MeepoList } from '../../../../classes';
@Component({
    selector: 'meepo-list-setting',
    templateUrl: './meepo-list-setting.html',
    styleUrls: ['./meepo-list-setting.scss']
})
export class MeepoListSetting implements OnInit {
    @Input() widget: MeepoList = new MeepoList();
    constructor() { }

    ngOnInit() { }
}
