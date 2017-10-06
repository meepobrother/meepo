import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShopsTagsService } from '../shops-tags.service';
@Component({
    selector: 'shops-tags-add',
    templateUrl: './shops-tags-add.html',
    styleUrls: ['./shops-tags-add.scss']
})
export class ShopsTagsAdd implements OnInit {
    form: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<any>,
        public fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public tags: ShopsTagsService
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