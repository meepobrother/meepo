import { Component, OnInit, Input } from '@angular/core';
import { ActionsTasksPostDefafult } from '../model';
@Component({
    selector: 'actions-tasks-post-view',
    templateUrl: './actions-tasks-post-view.html',
    styleUrls: ['./actions-tasks-post-view.scss']
})
export class ActionsTasksPostView implements OnInit {
    @Input() widget: ActionsTasksPostDefafult = new ActionsTasksPostDefafult();
    constructor() { }

    ngOnInit() { }
}
