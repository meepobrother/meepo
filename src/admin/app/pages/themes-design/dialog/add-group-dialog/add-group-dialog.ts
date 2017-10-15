import { Component, OnInit, Inject, Optional, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import uuid from 'uuid';
import { CatalogGroup } from '../../section/model';
import { ApiService } from '../../../../core';

@Component({
    selector: 'add-group-dialog',
    templateUrl: './add-group-dialog.html',
    styleUrls: ['./add-group-dialog.scss']
})
export class AddGroupDialog implements OnInit {
    form: FormGroup;
    constructor(
        public dialog: MatDialogRef<any>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder,
        public api: ApiService
    ) {
        this.form = this.fb.group({
            title: [''],
            id: [''],
            app_id: ['']            
        });
        this.dialog.afterOpen().subscribe(() => {
            const { title,id, app_id } = this.data || new CatalogGroup();
            this.form.get('title').setValue(title);
            this.form.get('app_id').setValue(app_id);
            this.form.get('id').setValue(id);
        });
    }
    ngOnInit() {}
    cancelGroupDialog() {
        this.dialog.close();
    }
    clickAddGroupConfirm() {
        this.api.mpost('app.editAppCatalog',this.form.value).subscribe(res=>{
            this.dialog.close(this.form.value);
        })
    }
}