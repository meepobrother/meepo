import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActionsOrderSearchDefafult } from '../model';
@Component({
    selector: 'actions-order-search-view',
    templateUrl: './actions-order-search-view.html',
    styleUrls: ['./actions-order-search-view.scss']
})
export class ActionsOrderSearchView implements OnInit, OnDestroy {
    @Input() widget: ActionsOrderSearchDefafult = new ActionsOrderSearchDefafult();
    constructor() { }

    ngOnInit() { }
    ngOnDestroy(){
        this.widget = null;
    }
}
