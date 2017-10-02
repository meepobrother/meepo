import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'setting-page',
    templateUrl: './setting.page.html',
    styleUrls: ['./setting.page.scss']
})
export class SettingPage implements OnInit {
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            title: '',
            desc: '',
            icon: ''
        });
    }

    ngOnInit() { }
}