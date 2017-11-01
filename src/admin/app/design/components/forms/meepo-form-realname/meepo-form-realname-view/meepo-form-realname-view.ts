import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormRealnameDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-realname-view',
    templateUrl: './meepo-form-realname-view.html',
    styleUrls: ['./meepo-form-realname-view.scss']
})
export class MeepoFormRealnameView implements OnInit {
    @Input() widget: MeepoFormRealnameDefault = new MeepoFormRealnameDefault();
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

