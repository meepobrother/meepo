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
            desc: ['']
        });
        this.dialog.afterOpen().subscribe(res => {
            const { title, desc } = this.data || new GoodsGroupAddDefault();
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