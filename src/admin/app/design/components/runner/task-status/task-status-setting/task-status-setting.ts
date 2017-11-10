import { Component, OnInit, Input } from '@angular/core';
import { TaskStatusDefault } from '../../../../classes';

@Component({
    selector: 'task-status-setting',
    templateUrl: './task-status-setting.html',
    styleUrls: ['./task-status-setting.scss']
})
export class TaskStatusSetting implements OnInit {
    @Input() widget: TaskStatusDefault = new TaskStatusDefault();
    constructor() { }

    ngOnInit() { }
}