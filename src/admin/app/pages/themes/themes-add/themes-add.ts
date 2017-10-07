import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import uuid from 'uuid';
@Component({
    selector: 'themes-add',
    templateUrl: './themes-add.html',
    styleUrls: ['./themes-add.scss']
})
export class ThemesAdd implements OnInit {
    form: FormGroup;
    constructor(
        public fb: FormBuilder,
        public dialogRef: MatDialogRef<any>
    ) { 
        this.form = this.fb.group({
            title: [''],
            price: [''],
            oauthor: [''],
            code: [uuid()]
        });
    }

    ngOnInit() { }

    save(){
        this.dialogRef.close(this.form.value);
    }

    cancel(){
        this.dialogRef.close();
    }
}
