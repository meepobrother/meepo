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

    ngOnInit() {
        this.widget.flows.map((res,key)=>{
            if(res.status == 1){
                this.widget.ActiveFlowIndex = key;
            }
        });
     }

    next(){
        const len = this.widget.flows.length;
        if(this.widget.ActiveFlowIndex +1 < len){
            this.widget.flows[this.widget.ActiveFlowIndex].status = 2;
            this.widget.flows[this.widget.ActiveFlowIndex+1].status = 1;
            this.widget.ActiveFlowIndex ++;
        }else{
            this.widget.flows[this.widget.ActiveFlowIndex].status = 2;
            console.log('到底了');
            // 该提交数据了
        }
    }
}
