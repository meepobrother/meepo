import { Component, OnInit, Input } from '@angular/core';
import { ActionsOrderPostDefafult } from '../model';
@Component({
    selector: 'actions-order-post-setting',
    templateUrl: './actions-order-post-setting.html',
    styleUrls: ['./actions-order-post-setting.scss']
})
export class ActionsOrderPostSetting implements OnInit {
    @Input() widget: ActionsOrderPostDefafult = new ActionsOrderPostDefafult();
    constructor() { }

    ngOnInit() { }
}
