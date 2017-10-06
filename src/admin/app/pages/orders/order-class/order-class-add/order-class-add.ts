import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { OrderClassAddService } from '../order-class-add.service';
import { OrderTagsService, OrderTagsAdd } from '../../order-tags';

@Component({
    selector: 'order-class-add',
    templateUrl: './order-class-add.html',
    styleUrls: ['./order-class-add.scss']
})
export class OrderClassAdd implements OnInit {
    form: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<any>,
        public fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public api: OrderClassAddService,
        public dialog: MatDialog,
        public tagApi: OrderTagsService
    ) { 
        this.form = this.fb.group({
            title: [''],
            uniacid: [''],
            id: [''],
            desc: [''],
            tags: [[]]
        });

        this.dialogRef.afterOpen().subscribe(()=>{
            this.form.get('title').setValue(this.data.title);
            this.form.get('uniacid').setValue(this.data.uniacid);
            this.form.get('id').setValue(this.data.id);  
            this.form.get('desc').setValue(this.data.desc);
            this.form.get('tags').setValue(this.data.tags);  
        });
    }

    ngOnInit() { }

    postDate(){
        console.log(this.form.value);
        this.dialogRef.close(this.form.value);
    }

    delete(){
        this.api.delete(this.form.value);
        this.dialogRef.close();
    }

    cancel(){
        this.dialogRef.close();
    }

    onSelect(e: any){
        this.form.get('tags').setValue(e);
    }

    addTags(){
        const dialogRef = this.dialog.open(OrderTagsAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.tagApi.add(res);
            }
        });
    }
}