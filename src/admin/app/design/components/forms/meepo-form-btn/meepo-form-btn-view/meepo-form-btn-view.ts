import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormBtnDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-btn-view',
    templateUrl: './meepo-form-btn-view.html',
    styleUrls: ['./meepo-form-btn-view.scss']
})
export class MeepoFormBtnView implements OnInit {
    @Input() widget: MeepoFormBtnDefault = new MeepoFormBtnDefault();
    constructor() { }
    ngOnInit() { }
}
