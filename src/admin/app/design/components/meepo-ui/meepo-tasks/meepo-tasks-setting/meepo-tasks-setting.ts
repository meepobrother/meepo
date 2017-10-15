import { Component, OnInit, Input } from '@angular/core';
import { MeepoTasks } from '../../../../classes';

@Component({
    selector: 'meepo-tasks-setting',
    templateUrl: './meepo-tasks-setting.html',
    styleUrls: ['./meepo-tasks-setting.scss']
})
export class MeepoTasksSetting implements OnInit {
    @Input() widget: MeepoTasks = new MeepoTasks();
    constructor() { }

    ngOnInit() { }
}

