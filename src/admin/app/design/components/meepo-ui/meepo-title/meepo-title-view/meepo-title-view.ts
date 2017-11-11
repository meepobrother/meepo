import { Component, OnInit, Input } from '@angular/core';
import { MeepoTitleDefault } from '../../../../classes';

@Component({
    selector: 'meepo-title-view',
    templateUrl: './meepo-title-view.html',
    styleUrls: ['./meepo-title-view.scss']
})
export class MeepoTitleView implements OnInit {
    @Input() widget: MeepoTitleDefault = new MeepoTitleDefault();
    constructor() { }

    ngOnInit() { }
}