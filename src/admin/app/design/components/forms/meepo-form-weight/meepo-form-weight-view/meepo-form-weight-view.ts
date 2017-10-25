import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormWeightDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-weight-view',
    templateUrl: './meepo-form-weight-view.html',
    styleUrls: ['./meepo-form-weight-view.scss']
})
export class MeepoFormWeightView implements OnInit {
    @Input() widget: MeepoFormWeightDefault = new MeepoFormWeightDefault();
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            weight: ['',Validators.required]
        });
    }

    ngOnInit() { }
}

