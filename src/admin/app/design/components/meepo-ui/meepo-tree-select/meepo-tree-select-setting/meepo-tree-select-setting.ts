import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { MeepoTreeSelectDefault } from '../../../../classes';

@Component({
    selector: 'meepo-tree-select-setting',
    templateUrl: './meepo-tree-select-setting.html',
    styleUrls: ['./meepo-tree-select-setting.scss']
})
export class MeepoTreeSelectSetting implements OnInit {
    @Input() widget: MeepoTreeSelectDefault = new MeepoTreeSelectDefault();
    constructor() { }
    ngOnInit() { }
    playAnimate() { }
    playVoice() { }
}
