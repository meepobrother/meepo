import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormFeeDefault } from '../../../../classes';

@Component({
    selector: 'meepo-form-fee-view',
    templateUrl: './meepo-form-fee-view.html',
    styleUrls: ['./meepo-form-fee-view.scss']
})
export class MeepoFormFeeView implements OnInit {
    @Input() widget: MeepoFormFeeDefault = new MeepoFormFeeDefault();
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

