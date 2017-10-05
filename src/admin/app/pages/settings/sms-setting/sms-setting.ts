import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'sms-setting',
    templateUrl: './sms-setting.html',
    styleUrls: ['./sms-setting.scss']
})
export class SmsSetting implements OnInit {
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            comment_tpl_id: ['']
        });
    }

    ngOnInit() { }
}