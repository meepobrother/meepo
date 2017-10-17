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
            title: [''],
            id: [''],
            uniacid: ['']          
        });

        this.dialog.afterOpen().subscribe(res=>{
            let { title, id, uniacid } = this.data || new GoodsTagsDefault();
            this.form.get('title').setValue(title);
            this.form.get('uniacid').setValue(uniacid);
            this.form.get('id').setValue(id);      
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
    id: number;
    uniacid: number;
}