import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'add-group-dialog',
    templateUrl: './add-group-dialog.html',
    styleUrls: ['./add-group-dialog.scss']
})
export class AddGroupDialog implements OnInit {
    form: FormGroup;
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            title: [''],
            pages: [[]]
        });

        // this.dialog.
    }

    ngOnInit() { }

    cancelGroupDialog() {
        this.dialog.close();
    }

    hideAddGroupDialog() {

    }

    clickAddGroupConfirm() {
        console.log(this.form.value);
        this.dialog.close(this.form.value);
    }

    keyboardEvent() { }
}