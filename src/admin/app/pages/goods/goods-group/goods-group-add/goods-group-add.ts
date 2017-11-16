import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'goods-group-add',
    templateUrl: './goods-group-add.html',
    styleUrls: ['./goods-group-add.scss']
})
export class GoodsGroupAdd implements OnInit {
    form: FormGroup;
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            title: [''],
            desc: [''],
            id: ['']
        });
        this.dialog.afterOpen().subscribe(res => {
            const { title, desc, id } = this.data || new GoodsGroupAddDefault();
            this.form.get('title').setValue(title);
            this.form.get('desc').setValue(desc);
            this.form.get('id').setValue(id);
        });
    }

    ngOnInit() { }

    cancel(){
        this.dialog.close();
    }

    save(){
        this.dialog.close(this.form.value)
    }
}


export class GoodsGroupAddDefault{
    title: string;
    desc: string;
}