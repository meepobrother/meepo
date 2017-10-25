import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormTextareaDefault } from '../../../../classes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'meepo-form-textarea-view',
    templateUrl: './meepo-form-textarea-view.html',
    styleUrls: ['./meepo-form-textarea-view.scss']
})
export class MeepoFormTextareaView implements OnInit {
    @Input() widget: MeepoFormTextareaDefault = new MeepoFormTextareaDefault();
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            desc: ['',Validators.required]
        });
    }

    ngOnInit() { }
}