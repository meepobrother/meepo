import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeuiPreviewDefault } from '../../../../classes';
@Component({
    selector: 'weui-preview-view',
    templateUrl: './weui-preview-view.html',
    styleUrls: ['./weui-preview-view.scss']
})
export class WeuiPreviewView implements OnInit, OnChanges {
    @Input() widget: WeuiPreviewDefault = new WeuiPreviewDefault();
    constructor() { }
    ngOnInit() {}
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
}

