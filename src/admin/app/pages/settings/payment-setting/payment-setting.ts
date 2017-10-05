import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'payment-setting',
    templateUrl: './payment-setting.html',
    styleUrls: ['./payment-setting.scss']
})
export class PaymentSetting implements OnInit {
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