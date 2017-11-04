import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as uuid from 'uuid';

import { ApiService } from '../../../core';
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
        @Inject(MAT_DIALOG_DATA) public data: any,
        public api: ApiService
    ) {
        this.form = this.fb.group({
            title: [''],
            price: [''],
            author: [''],
            token: [uuid()],
            id: ['']
        });
        this.dialogRef.afterOpen().subscribe(() => {
            let { title, price, author, token, id } = this.data || { title: '', author: '', token: uuid(), id: 0, price: 0.00 };
            this.form.get('title').setValue(title);
            this.form.get('price').setValue(price);
            this.form.get('author').setValue(author);
            this.form.get('token').setValue(token);
            this.form.get('id').setValue(id);
        });
    }

    ngOnInit() { }

    btnTitle: any = {
        title: '保存',
        isLoading: false
    };

    save() {
        if (!this.btnTitle.isLoading) {
            this.btnTitle = {
                title: '保存中',
                isLoading: true
            };
            this.api.mpost('app.editApp', this.form.value, 'imeepos_runner', true).subscribe(res => {
                setTimeout(() => {
                    this.btnTitle = {
                        title: '保存',
                        isLoading: false
                    };
                    this.dialogRef.close(this.form.value);
                }, 300)
            });
        }

    }

    cancel() {
        this.dialogRef.close();
    }
}
