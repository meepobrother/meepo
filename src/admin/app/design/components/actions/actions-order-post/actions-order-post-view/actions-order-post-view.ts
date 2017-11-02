import { Component, OnInit, Input } from '@angular/core';
import { ActionsOrderPostDefafult } from '../model';
@Component({
    selector: 'actions-order-post-view',
    templateUrl: './actions-order-post-view.html',
    styleUrls: ['./actions-order-post-view.scss']
})
export class ActionsOrderPostView implements OnInit {
    @Input() widget: ActionsOrderPostDefafult = new ActionsOrderPostDefafult();
    constructor() { }

    ngOnInit() { }
}
