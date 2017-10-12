import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'meepo-text-view',
    templateUrl: './meepo-text-view.html',
    styleUrls: ['./meepo-text-view.scss']
})
export class MeepoTextView implements OnInit {
    @Input() widget: any;
    constructor() { }

    ngOnInit() { }
}