import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActionsTasksPostDefafult } from '../model';
@Component({
    selector: 'actions-tasks-post-view',
    templateUrl: './actions-tasks-post-view.html',
    styleUrls: ['./actions-tasks-post-view.scss']
})
export class ActionsTasksPostView implements OnInit, OnDestroy {
    @Input() widget: ActionsTasksPostDefafult = new ActionsTasksPostDefafult();
    constructor() { }

    ngOnInit() { }

    ngOnDestroy(){
        this.widget = null;
    }
}
