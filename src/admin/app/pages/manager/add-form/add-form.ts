import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../core';
@Component({
    selector: 'add-form',
    templateUrl: './add-form.html',
    styleUrls: ['./add-form.scss']
})
export class AddForm implements OnInit {
    form: FormGroup;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder,
        public api: ApiService
    ) {
        this.form = this.fb.group({
            type: [''],
            name: [''],
            id: [''],
            tpl: ['']
        });

        this.dialog.afterOpen().subscribe(res => {
            let { type, name, id, tpl } = this.data;
            this.form.get('type').setValue(type);
            this.form.get('name').setValue(name);
            this.form.get('id').setValue(id);
            this.form.get('tpl').setValue(tpl);
        });
    }

    ngOnInit() { }

    save() {
        this.form.get('tpl').setValue(this.form.get('tpl').value.replace(/[\r\n]/g,""));
        this.api.mpost('app.eidtAppForms', this.form.value).subscribe(res => {
            this.dialog.close(this.form.value);
        });
    }

    cancel() {
        this.dialog.close();
    }

    delete() {
        this.api.mpost('app.deleteAppForms', this.form.value).subscribe(res => {
            this.cancel();
        });
    }
}