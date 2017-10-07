import { Component, OnInit, Inject } from '@angular/core';
import { ShopsListService } from '../shops-list.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'shops-list-add',
    templateUrl: './shops-list-add.html',
    styleUrls: ['./shops-list-add.scss']
})
export class ShopsListAdd implements OnInit {
    form: FormGroup;
    constructor(
        public api: ShopsListService,
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) data: any,
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            title: [''],
            mobile: [''],
            location: this.fb.group({
                lat: [''],
                lng: [''],
                address: [''],
                detail: ['']
            }),
            desc: [''],
            content: ['']
        })
    }

    ngOnInit() { }

    cancel() { }

    save() { }

    delete() { }
}