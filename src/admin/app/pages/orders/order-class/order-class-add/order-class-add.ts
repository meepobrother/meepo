import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { OrderClassAddService } from '../order-class-add.service';
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
        public api: OrderClassAddService
    ) { 
        this.form = this.fb.group({
            title: [''],
            uniacid: [''],
            id: [''],
            desc: ['']
        });

        this.dialogRef.afterOpen().subscribe(()=>{
            this.form.get('title').setValue(this.data.title);
            this.form.get('uniacid').setValue(this.data.uniacid);
            this.form.get('id').setValue(this.data.id);  
            this.form.get('desc').setValue(this.data.desc);         
        });
    }

    ngOnInit() { }

    postDate(){
        this.dialogRef.close(this.form.value);
    }

    delete(){
        this.api.delete(this.form.value);
        this.dialogRef.close();
    }

    cancel(){
        this.dialogRef.close();
    }
}