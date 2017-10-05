import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'order-tags-add',
    templateUrl: './order-tags-add.html',
    styleUrls: ['./order-tags-add.scss']
})
export class OrderTagsAdd implements OnInit {
    form: FormGroup;
    constructor(
        public dialogRef: MdDialogRef<any>,
        public fb: FormBuilder,
        @Inject(MD_DIALOG_DATA) public data: any,
    ) { 
        this.form = this.fb.group({
            title: [''],
            uniacid: [''],
            id: ['']
        });
    }

    ngOnInit() { }

    postDate(){
        this.dialogRef.close(this.form.value);
    }

    delete(){
        this.dialogRef.close();
    }

    cancel(){
        this.dialogRef.close();
    }
}