import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'version-setting',
    templateUrl: './version-setting.html',
    styleUrls: ['./version-setting.scss']
})
export class VersionSetting implements OnInit {
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