import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeuiCells } from '../weui-cells';
@Component({
    selector: 'weui-cells-setting',
    templateUrl: './weui-cells-setting.html',
    styleUrls: ['./weui-cells-setting.scss']
})
export class WeuiCellsSetting implements OnInit, OnChanges {
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

