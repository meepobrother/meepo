import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormTimeEndDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-time-end-view',
    templateUrl: './meepo-form-time-end-view.html',
    styleUrls: ['./meepo-form-time-end-view.scss']
})
export class MeepoFormTimeEndView implements OnInit {
    @Input() widget: MeepoFormTimeEndDefault = new MeepoFormTimeEndDefault();
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

