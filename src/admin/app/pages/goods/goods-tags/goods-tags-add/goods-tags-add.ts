import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'goods-tags-add',
    templateUrl: './goods-tags-add.html',
    styleUrls: ['./goods-tags-add.scss']
})
export class GoodsTagsAdd implements OnInit {
    form: FormGroup;
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            title: ['']
        });

        this.dialog.afterOpen().subscribe(res=>{
            let { title } = this.data || new GoodsTagsDefault();
            this.form.get('title').setValue(title);
        });
    }

    ngOnInit() { }

    save(){
        this.dialog.close(this.form.value);
    }

    cancel(){
        this.dialog.close();
    }
}

export class GoodsTagsDefault{
    title: string;
}