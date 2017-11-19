import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'group-add',
    templateUrl: './group-add.html',
    styleUrls: ['./group-add.scss']
})
export class GroupAdd implements OnInit {
    form: FormGroup;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            title: [''],
            id: [''],
            uniacid: [''],
            fid: ['']
        });
        this.dialog.afterOpen().subscribe(res => {
            let { title, id, uniacid,fid } = this.data;
            this.form.get('title').setValue(title);
            this.form.get('id').setValue(id);
            this.form.get('uniacid').setValue(uniacid);
            this.form.get('fid').setValue(fid);
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

    onSelectGroup(e: any){
        this.form.get('fid').setValue(e.id);
    }
}