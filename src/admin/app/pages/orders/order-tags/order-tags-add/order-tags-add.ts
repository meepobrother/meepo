import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { OrderTagsService } from '../order-tags.service';
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
        public tags: OrderTagsService
    ) { 
        this.form = this.fb.group({
            title: [''],
            uniacid: [''],
            id: ['']
        });

        this.dialogRef.afterOpen().subscribe(()=>{
            this.form.get('title').setValue(this.data.title);
            this.form.get('uniacid').setValue(this.data.uniacid);
            this.form.get('id').setValue(this.data.id);            
        });
    }

    ngOnInit() { }

    postDate(){
        this.dialogRef.close(this.form.value);
    }

    delete(){
        this.tags.delete(this.form.value);
        this.dialogRef.close();
    }

    cancel(){
        this.dialogRef.close();
    }
}