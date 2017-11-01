import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeuiCellsDefault } from '../../../../classes';
@Component({
    selector: 'weui-cells-view',
    templateUrl: './weui-cells-view.html',
    styleUrls: ['./weui-cells-view.scss']
})
export class WeuiCellsView implements OnInit, OnChanges {
    @Input() widget: WeuiCellsDefault = new WeuiCellsDefault();
    constructor() { }
    ngOnInit() { }
    ngOnChanges(changes: SimpleChanges) { 
        console.log(changes);        
    }
}

