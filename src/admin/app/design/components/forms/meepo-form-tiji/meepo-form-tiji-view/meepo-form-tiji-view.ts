import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormTijiDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-tiji-view',
    templateUrl: './meepo-form-tiji-view.html',
    styleUrls: ['./meepo-form-tiji-view.scss']
})
export class MeepoFormTijiView implements OnInit {
    @Input() widget: MeepoFormTijiDefault = new MeepoFormTijiDefault();
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            tiji: ['',Validators.required]
        });
    }

    ngOnInit() { }
}

