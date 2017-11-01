import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeuiPreviewDefault } from '../../../../classes';
@Component({
    selector: 'weui-preview-setting',
    templateUrl: './weui-preview-setting.html',
    styleUrls: ['./weui-preview-setting.scss']
})
export class WeuiPreviewSetting implements OnInit, OnChanges {
    @Input() widget: WeuiPreviewDefault = new WeuiPreviewDefault();
    constructor() { }

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {}
}

