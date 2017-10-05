import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'rights-setting',
    templateUrl: './rights-setting.html',
    styleUrls: ['./rights-setting.scss']
})
export class RightsSetting implements OnInit {
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