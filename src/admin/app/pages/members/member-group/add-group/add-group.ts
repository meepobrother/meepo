import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MemberGroupServiceService } from '../member-group.service';
import { Group, AddGroupOpt } from '../add-grop-opt';


@Component({
    selector: 'add-group',
    templateUrl: './add-group.html',
    styleUrls: ['./add-group.scss']
})
export class AddGroup implements OnInit {
    form: FormGroup;
    constructor(
        public dialogRef: MdDialogRef<any>,
        public fb: FormBuilder,
        @Inject(MD_DIALOG_DATA) public data: any,
        public api: MemberGroupServiceService
    ) {
        this.form = this.fb.group({
            title: [''],
            desc: [''],
            status: ['1'],
            id: [''],
            uniacid: ['']
        });
    }

    ngOnInit() {
        if (this.data) {
            this.form.get('title').setValue(this.data.title);
            this.form.get('desc').setValue(this.data.desc);
            this.form.get('status').setValue(this.data.status);
            this.form.get('id').setValue(this.data.id);
            this.form.get('uniacid').setValue(this.data.uniacid);
        }
    }

    delete() {
        this.api.delete(this.form.value).subscribe(res => {
            this.dialogRef.close();
        })
    }

    postDate() {
        this.dialogRef.close({ opt: 'add', item: this.form.value });
    }

    cancel() {
        this.dialogRef.close();
    }
}