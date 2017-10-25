import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormTimeStartDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-time-start-view',
    templateUrl: './meepo-form-time-start-view.html',
    styleUrls: ['./meepo-form-time-start-view.scss']
})
export class MeepoFormTimeStartView implements OnInit {
    @Input() widget: MeepoFormTimeStartDefault = new MeepoFormTimeStartDefault();
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

