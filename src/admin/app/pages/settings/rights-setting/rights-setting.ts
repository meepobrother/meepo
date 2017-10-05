import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SettingService, SettingDate } from '../setting.service';

@Component({
    selector: 'rights-setting',
    templateUrl: './rights-setting.html',
    styleUrls: ['./rights-setting.scss']
})
export class RightsSetting implements OnInit {
    code: string = 'setting.rights';
    form: FormGroup;
    constructor(
        public fb: FormBuilder,
        public setting: SettingService        
    ) { 
        this.form = this.fb.group({
            title: [''],
            share_title: [''],
            share_desc: ['']
        });
        this.form.valueChanges.debounceTime(300).subscribe(res => {
            this.save();
        });
    }

    ngOnInit() { 
        this.setting.get({ code: this.code }).subscribe((date: any) => {
            if (date) {
                const { title, share_title, share_desc } = date;
                this.form.get('title').setValue(title);
                this.form.get('share_title').setValue(share_title);
                this.form.get('share_desc').setValue(share_desc);                
            }
        });
    }

    save(){
        this.setting.save({ code: this.code, data: this.form.value }).subscribe(res => { })
    }
}