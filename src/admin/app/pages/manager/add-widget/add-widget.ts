import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../core';
@Component({
    selector: 'add-widget',
    templateUrl: './add-widget.html',
    styleUrls: ['./add-widget.scss']
})
export class AddWidget implements OnInit {
    form: FormGroup;
    groups: any[] = [];
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
            tpl: [''],
            group_id: ['']
        });

        this.dialog.afterOpen().subscribe(res => {
            let { type, name, id, tpl, group_id } = this.data;
            this.form.get('type').setValue(type);
            this.form.get('name').setValue(name);
            this.form.get('id').setValue(id);
            this.form.get('tpl').setValue(tpl);
            this.form.get('group_id').setValue(group_id);
        });
    }

    ngOnInit() {
        this.api.mpost('app.getListAppWidgetsGroup', { page: 1, psize: 30 }, 'imeepos_runner', true).subscribe((res: any) => {
            this.groups = res.info;
        });
    }

    save() {
        this.form.get('tpl').setValue(this.form.get('tpl').value.replace(/[\r\n]/g, ""));
        this.api.mpost('app.eidtAppWidgets', this.form.value).subscribe(res => {
            this.dialog.close(this.form.value);
        });
    }

    cancel() {
        this.dialog.close();
    }

    delete() {
        this.api.mpost('app.deleteAppWidgets', this.form.value).subscribe(res => {
            this.cancel();
        });
    }
}