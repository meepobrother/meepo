import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'order-list-add',
    templateUrl: './order-list-add.html',
    styleUrls: ['./order-list-add.scss']
})
export class OrderListAdd implements OnInit {
    form: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<any>,
        public fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any,
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