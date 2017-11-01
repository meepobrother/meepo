import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../core';
// 添加数据库
@Component({
    selector: 'add-table',
    templateUrl: './add-table.html',
    styleUrls: ['./add-table.scss']
})
export class AddTable implements OnInit {
    form: FormGroup;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder,
        public api: ApiService
    ) {
        this.form = this.fb.group({
            name: [''],
            fileds: [[]]
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
        this.form.get('tpl').setValue(this.form.get('tpl').value.replace(/[\r\n]/g, ""));
        this.api.mpost('app.eidtAppWidgets', this.form.value, 'imeepos_runner', true).subscribe(res => {
            this.dialog.close(this.form.value);
        });
    }

    cancel() {
        this.dialog.close();
    }

    delete() {
        this.api.mpost('app.deleteAppWidgets', this.form.value, 'imeepos_runner', true).subscribe(res => {
            this.cancel();
        });
    }
}