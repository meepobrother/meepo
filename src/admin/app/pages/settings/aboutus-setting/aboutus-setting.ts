import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SettingService, SettingDate } from '../setting.service';
import 'rxjs/add/operator/debounceTime';
@Component({
    selector: 'aboutus-setting',
    templateUrl: './aboutus-setting.html',
    styleUrls: ['./aboutus-setting.scss']
})
export class AboutUsSetting implements OnInit {
    code: string = 'setting.aboutus';
    form: FormGroup;
    constructor(
        public fb: FormBuilder,
        public setting: SettingService
    ) {
        this.form = this.fb.group({
            title: [''],
            desc: [''],
            kefus: this.fb.array([])
        });

        console.log(this.form);
        console.log(this.form.get('kefus').value)
    }

    ngOnInit() {
        this.setting.get({ code: this.code }).subscribe((date: any) => {
            if (date) {
                const { title, desc, kefus } = date;
                this.form.get('title').setValue(title);
                this.form.get('desc').setValue(desc);
                kefus.map(res => {
                    const kefu = this.fb.control(res);
                    (this.form.get('kefus') as FormArray).push(kefu)
                })
            }
        });

        this.form.valueChanges.debounceTime(300).subscribe(res => {
            this.save();
        });
    }

    add() {
        const kefu = this.fb.control('');
        (this.form.get('kefus') as FormArray).push(kefu);
        console.log(this.form.get('kefus').value)
    }

    save() {
        this.setting.save({ code: this.code, data: this.form.value }).subscribe(res => { })
    }

    onChange(index: number, evt: any) {
        this.form.get('kefus').get([index]).setValue(evt.target.value);
    }
}