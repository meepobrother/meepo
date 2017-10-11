import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CatalogService } from '../../section/catalog.service';

@Component({
    selector: 'add-page-dialog',
    templateUrl: './add-page-dialog.html',
    styleUrls: ['./add-page-dialog.scss']
})
export class AddPageDialog implements OnInit {
    form: FormGroup;
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder,
        public catalogService: CatalogService
    ) {
        this.form = this.fb.group({
            title: [''],
            keyword: [''],
            desc: [''],
            cata_id: ['']
        });

        this.dialog.afterOpen().subscribe(() => {
            const { title, cata_id } = this.data;
            this.form.get('title').setValue(title);
            this.form.get('cata_id').setValue(cata_id);            
        });
    }

    ngOnInit() { }

    cancelPageDialog() {
        this.dialog.close();
    }

    clickAddPageConfirm() {
        console.log(this.form.value);
        this.dialog.close(this.form.value);
    }
    // 选择布局
    onSelectTheme(){}
}