import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
    selector: 'tasks-group-add',
    templateUrl: './tasks-group-add.html',
    styleUrls: ['./tasks-group-add.scss']
})
export class TasksGroupAdd implements OnInit {
    form: FormGroup;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            title: [''],
            displayorder: [''],
            id: ['']
        });

        this.dialog.afterOpen().subscribe(() => {
            let { title, displayorder, id } = this.data;
            this.form.get('title').setValue(title);
            this.form.get('displayorder').setValue(displayorder);
            this.form.get('id').setValue(id);
        });
    }
    ngOnInit() { }
    save() {
        this.dialog.close(this.form.value);
    }
    cancel() {
        this.dialog.close();
    }

    close() {
        this.cancel();
    }
}
