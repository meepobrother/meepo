import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormPriceDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-price-view',
    templateUrl: './meepo-form-price-view.html',
    styleUrls: ['./meepo-form-price-view.scss']
})
export class MeepoFormPriceView implements OnInit {
    @Input() widget: MeepoFormPriceDefault = new MeepoFormPriceDefault();
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

