import { Component, OnInit, Input } from '@angular/core';
import { ActionsTasksPostDefafult } from '../model';
@Component({
    selector: 'actions-tasks-post-setting',
    templateUrl: './actions-tasks-post-setting.html',
    styleUrls: ['./actions-tasks-post-setting.scss']
})
export class ActionsTasksPostSetting implements OnInit {
    @Input() widget: ActionsTasksPostDefafult = new ActionsTasksPostDefafult();
    constructor() { }

    ngOnInit() { }
}
