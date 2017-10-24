import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormTextarea } from '../../../../classes';
@Component({
    selector: 'meepo-form-textarea-view',
    templateUrl: './meepo-form-textarea-view.html',
    styleUrls: ['./meepo-form-textarea-view.scss']
})
export class MeepoFormTextareaView implements OnInit {
    @Input() widget: MeepoFormTextarea = new MeepoFormTextarea();
    constructor() { }

    ngOnInit() { }
}