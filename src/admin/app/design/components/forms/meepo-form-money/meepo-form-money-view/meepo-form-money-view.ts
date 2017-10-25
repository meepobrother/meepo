import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormMoneyDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-money-view',
    templateUrl: './meepo-form-money-view.html',
    styleUrls: ['./meepo-form-money-view.scss']
})
export class MeepoFormMoneyView implements OnInit {
    @Input() widget: MeepoFormMoneyDefault = new MeepoFormMoneyDefault();
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

