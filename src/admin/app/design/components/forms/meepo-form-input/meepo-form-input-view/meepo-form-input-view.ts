import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormInputDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-input-view',
    templateUrl: './meepo-form-input-view.html',
    styleUrls: ['./meepo-form-input-view.scss']
})
export class MeepoFormInputView implements OnInit {
    @Input() widget: MeepoFormInputDefault = new MeepoFormInputDefault();
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            price: ['',Validators.required]
        });
    }

    ngOnInit() { }
}

