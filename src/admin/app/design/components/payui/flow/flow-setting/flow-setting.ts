import { Component, OnInit, Input } from '@angular/core';
import { PayuiFlowDefault } from '../../../../classes';

@Component({
    selector: 'payui-flow-setting',
    templateUrl: './flow-setting.html',
    styleUrls: ['./flow-setting.scss']
})
export class PayuiFlowSetting implements OnInit {
    @Input() widget: PayuiFlowDefault = new PayuiFlowDefault();

    list: any[] = [];
    constructor() { }

    ngOnInit() { }

    next(){

    }

    add(){
        
    }
}
