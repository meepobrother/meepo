import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormTextareaDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-textarea-setting',
    templateUrl: './meepo-form-textarea-setting.html',
    styleUrls: ['./meepo-form-textarea-setting.scss']
})
export class MeepoFormTextareaSetting implements OnInit {
    @Input() widget: MeepoFormTextareaDefault = new MeepoFormTextareaDefault();
    constructor() { }

    ngOnInit() { }
}