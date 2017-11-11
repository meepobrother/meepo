import { Component, OnInit, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { MeepoCardDefault } from '../../../../classes';

@Component({
    selector: 'meepo-card-view',
    templateUrl: './meepo-card-view.html',
    styleUrls: ['./meepo-card-view.scss']
})
export class MeepoCardView implements OnInit {
    @Input() widget: MeepoCardDefault = new MeepoCardDefault();
    constructor() { }
    ngOnInit() { }
}
