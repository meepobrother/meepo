import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'template-setting',
    templateUrl: './template-setting.html',
    styleUrls: ['./template-setting.scss']
})
export class TemplateSetting implements OnInit {
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            comment_tpl_id: ['']
        });
    }

    ngOnInit() { }

    save(){}
}