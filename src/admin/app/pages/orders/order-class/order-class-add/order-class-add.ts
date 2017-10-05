import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'order-class-add',
    templateUrl: './order-class-add.html',
    styleUrls: ['./order-class-add.scss']
})
export class OrderClassAdd implements OnInit {
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