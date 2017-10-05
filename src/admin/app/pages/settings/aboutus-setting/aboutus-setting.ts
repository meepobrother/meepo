import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormArray } from '@angular/forms';
@Component({
    selector: 'aboutus-setting',
    templateUrl: './aboutus-setting.html',
    styleUrls: ['./aboutus-setting.scss']
})
export class AboutUsSetting implements OnInit {
    code: string = 'setting.aboutus';
    form: FormGroup;
    kefus: FormArray;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            title: [''],
            desc: [''],
            kefus: this.fb.array([
                this.fb.control('')
            ])
        });
        this.kefus = this.form.get('kefus') as FormArray;

        console.log(this.kefus);
    }

    ngOnInit() { }

    add(){
        const kefu = this.fb.control('');
        this.kefus.push(kefu);
    }

    save(){}
}