import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Picker } from '../picker';
@Component({
    selector: 'picker-view',
    templateUrl: './picker-view.html',
    styleUrls: ['./picker-view.scss']
})
export class PickerView implements OnInit {
    @Input() widget: Picker = new Picker();
    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            picker1: [{}],
            picker2: [{}]
        });
    }

    ngOnInit() { }
}
