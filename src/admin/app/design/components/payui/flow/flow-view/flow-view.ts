import { Component, OnInit, Input } from '@angular/core';
import { PayuiFlowDefault } from '../../../../classes';

@Component({
    selector: 'payui-flow-view',
    templateUrl: './flow-view.html',
    styleUrls: ['./flow-view.scss']
})
export class PayuiFlowView implements OnInit {
    @Input() widget: PayuiFlowDefault = new PayuiFlowDefault();

    list: any[] = [];
    constructor() { }

    ngOnInit() { }
}
