import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeuiCells } from '../../../../classes/weui-cells';
@Component({
    selector: 'weui-cells-view',
    templateUrl: './weui-cells-view.html',
    styleUrls: ['./weui-cells-view.scss']
})
export class WeuiCellsView implements OnInit, OnChanges {
    @Input() widget: WeuiCells = new WeuiCells();
    innerStyle: any;
    constructor() { }

    ngOnInit() { 
        this.innerStyle = this.widget.style;
    }

    ngOnChanges(changes: SimpleChanges){
        if('widget' in changes){
            this.innerStyle = this.widget.style;
        }
    }
}

