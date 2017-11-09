import { Component, OnInit, Input } from '@angular/core';
import {MeepoTextDefault} from '../../../../classes';

@Component({
    selector: 'meepo-text-view',
    templateUrl: './meepo-text-view.html',
    styleUrls: ['./meepo-text-view.scss']
})
export class MeepoTextView implements OnInit {
    @Input() widget: MeepoTextDefault = new MeepoTextDefault();
    constructor() { }

    ngOnInit() { }
}