import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import uuid from 'uuid';
import { ThemesMineService } from '../themes-mine.service';
@Component({
    selector: 'themes-add',
    templateUrl: './themes-add.html',
    styleUrls: ['./themes-add.scss']
})
export class ThemesAdd implements OnInit {
    form: FormGroup;
    constructor(
        public fb: FormBuilder,
        public dialogRef: MatDialogRef<any>,
        public mine: ThemesMineService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.form = this.fb.group({
            title: [''],
            price: [''],
            oauthor: [''],
            code: [uuid()]
        });
        this.dialogRef.afterOpen().subscribe(() => {
            let { title, price, oauthor, code } = this.data;
            this.form.get('title').setValue(title);
            this.form.get('price').setValue(price);
            this.form.get('oauthor').setValue(oauthor);
            this.form.get('code').setValue(code);
        });
    }

    ngOnInit() { }

    save() {
        this.mine.edit(this.form.value);
        this.dialogRef.close(this.form.value);
    }

    cancel() {
        this.dialogRef.close();
    }
}
