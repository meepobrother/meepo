import { Component, OnInit, Input } from '@angular/core';
import { ActionsOrderSearchDefafult } from '../model';
@Component({
    selector: 'actions-order-search-setting',
    templateUrl: './actions-order-search-setting.html',
    styleUrls: ['./actions-order-search-setting.scss']
})
export class ActionsOrderSearchSetting implements OnInit {
    @Input() widget: ActionsOrderSearchDefafult = new ActionsOrderSearchDefafult();
    constructor() { }

    ngOnInit() { }
}
