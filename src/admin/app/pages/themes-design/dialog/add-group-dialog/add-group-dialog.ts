import { Component, OnInit, Inject, Optional, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import uuid from 'uuid';
import { CatalogGroup } from '../../section/model';
@Component({
    selector: 'add-group-dialog',
    templateUrl: './add-group-dialog.html',
    styleUrls: ['./add-group-dialog.scss']
})
export class AddGroupDialog implements OnInit {
    // @Input() data: any;
    form: FormGroup;
    constructor(
        public dialog: MatDialogRef<any>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            title: [''],
            pages: [[]],
            id: [uuid()]
        });

        // this.dialog.
        this.dialog.afterOpen().subscribe(() => {
            const { id,title, pages } = this.data || new CatalogGroup();
            this.form.get('title').setValue(title);
            this.form.get('pages').setValue(pages);
            this.form.get('id').setValue(id);
        });
    }

    ngOnInit() { 
        const { id,title, pages } = this.data || new CatalogGroup();
        this.form.get('title').setValue(title);
        this.form.get('pages').setValue(pages);
        this.form.get('id').setValue(id);
    }

    cancelGroupDialog() {
        this.dialog.close();
    }

    hideAddGroupDialog() {

    }

    clickAddGroupConfirm() {
        this.dialog.close(this.form.value);
    }

    keyboardEvent() { }
}