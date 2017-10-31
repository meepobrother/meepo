import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormBtnDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-btn-setting',
    templateUrl: './meepo-form-btn-setting.html',
    styleUrls: ['./meepo-form-btn-setting.scss']
})
export class MeepoFormBtnSetting implements OnInit {
    @Input() widget: MeepoFormBtnDefault = new MeepoFormBtnDefault();
    constructor() { }
    ngOnInit() { }
}
