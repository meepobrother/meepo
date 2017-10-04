import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
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
        @Inject(MD_DIALOG_DATA) public data: any
    ) { 
        this.form = this.fb.group({
            title: [''],
            desc: [''],
            status: ['1']
        });
    }

    ngOnInit() { 
        if(this.data){
            this.form.get('title').setValue(this.data.title);
            this.form.get('desc').setValue(this.data.desc);
            this.form.get('status').setValue(this.data.status);            
        }
    }

    postDate(){
        this.dialogRef.close(this.form.value);
    }

    cancel(){
        this.dialogRef.close();
    }
}