import { Component, OnInit, Input } from '@angular/core';
import { ActionsOrderSearchDefafult } from '../model';
@Component({
    selector: 'actions-order-search-view',
    templateUrl: './actions-order-search-view.html',
    styleUrls: ['./actions-order-search-view.scss']
})
export class ActionsOrderSearchView implements OnInit {
    @Input() widget: ActionsOrderSearchDefafult = new ActionsOrderSearchDefafult();
    constructor() { }

    ngOnInit() { }
}
