import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../core';

@Component({
    selector: 'add-widget-group',
    templateUrl: './add-widget-group.html',
    styleUrls: ['./add-widget-group.scss']
})
export class AddWidgetGroup implements OnInit {
    form: FormGroup;
    
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder,
        public api: ApiService
    ) { 
        this.form = this.fb.group({
            code: [''],
            title: [''],
            id: ['']
        });

        this.dialog.afterOpen().subscribe(res => {
            let { code, title, id } = this.data;
            this.form.get('code').setValue(code);
            this.form.get('title').setValue(title);
            this.form.get('id').setValue(id);
        });
    }

    ngOnInit() { }

    save() {
        // this.form.get('tpl').setValue(this.form.get('tpl').value.replace(/[\r\n]/g,""));
        this.dialog.close(this.form.value);
    }

    cancel() {
        this.dialog.close();
    }

    delete() {
        this.api.mpost('app.deleteAppWidgetsGroup', this.form.value).subscribe(res => {
            this.cancel();
        });
    }
}
