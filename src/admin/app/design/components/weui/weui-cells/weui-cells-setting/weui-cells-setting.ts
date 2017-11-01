import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeuiCells } from '../../../../classes/weui-cells';

@Component({
    selector: 'weui-cells-setting',
    templateUrl: './weui-cells-setting.html',
    styleUrls: ['./weui-cells-setting.scss']
})
export class WeuiCellsSetting implements OnInit, OnChanges {
    @Input() widget: WeuiCells = new WeuiCells();
    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges){}
}

