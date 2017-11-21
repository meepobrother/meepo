import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActionsTasksPostDefafult } from '../model';
@Component({
    selector: 'actions-tasks-post-setting',
    templateUrl: './actions-tasks-post-setting.html',
    styleUrls: ['./actions-tasks-post-setting.scss']
})
export class ActionsTasksPostSetting implements OnInit, OnDestroy {
    @Input() widget: ActionsTasksPostDefafult = new ActionsTasksPostDefafult();
    constructor() { }

    ngOnInit() { }
    ngOnDestroy(){
        this.widget = null;
    }
}
