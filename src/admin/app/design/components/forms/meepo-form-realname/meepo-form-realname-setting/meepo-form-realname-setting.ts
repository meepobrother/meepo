import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormRealnameDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-realname-setting',
    templateUrl: './meepo-form-realname-setting.html',
    styleUrls: ['./meepo-form-realname-setting.scss']
})
export class MeepoFormRealnameSetting implements OnInit {
    @Input() widget: MeepoFormRealnameDefault = new MeepoFormRealnameDefault();
    constructor() { }
    ngOnInit() { }
}

