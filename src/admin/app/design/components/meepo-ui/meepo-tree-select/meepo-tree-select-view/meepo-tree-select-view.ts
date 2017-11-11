import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { MeepoTreeSelectDefault } from '../../../../classes';

@Component({
    selector: 'meepo-tree-select-view',
    templateUrl: './meepo-tree-select-view.html',
    styleUrls: ['./meepo-tree-select-view.scss']
})
export class MeepoTreeSelectView implements OnInit {
    @Input() widget: MeepoTreeSelectDefault = new MeepoTreeSelectDefault();
    constructor() { }
    ngOnInit() { }
    playAnimate() { }
    playVoice() { }
}
