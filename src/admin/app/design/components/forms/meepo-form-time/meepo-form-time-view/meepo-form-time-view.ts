import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormTimeDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-time-view',
    templateUrl: './meepo-form-time-view.html',
    styleUrls: ['./meepo-form-time-view.scss']
})
export class MeepoFormTimeView implements OnInit {
    @Input() widget: MeepoFormTimeDefault = new MeepoFormTimeDefault();
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            time: ['',Validators.required]
        });
    }

    ngOnInit() { }
}

