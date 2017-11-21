import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActionsOrderSearchDefafult } from '../model';
@Component({
    selector: 'actions-order-search-setting',
    templateUrl: './actions-order-search-setting.html',
    styleUrls: ['./actions-order-search-setting.scss']
})
export class ActionsOrderSearchSetting implements OnInit, OnDestroy {
    @Input() widget: ActionsOrderSearchDefafult = new ActionsOrderSearchDefafult();
    constructor() { }

    ngOnInit() { }
    ngOnDestroy(){
        this.widget = null;
    }
}
