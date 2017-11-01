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
        const len = this.widget.flows.length;
        console.log(this.widget.ActiveFlowIndex + 1);
        if(this.widget.ActiveFlowIndex +1 < len){
            this.widget.flows[this.widget.ActiveFlowIndex].status = 2;
            this.widget.flows[this.widget.ActiveFlowIndex+1].status = 1;
            this.widget.ActiveFlowIndex ++;
        }else{
            console.log('到底了');
        }
    }

    add(){
        
    }
}
