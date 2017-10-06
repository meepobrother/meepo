import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ShopsTagsService, ShopsTagsAdd } from '../../shops-tags';
import { ShopsGroupService } from '../shops-group.service';

@Component({
    selector: 'shops-group-add',
    templateUrl: './shops-group-add.html',
    styleUrls: ['./shops-group-add.scss']
})
export class ShopsGroupAdd implements OnInit {
    form: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<any>,
        public fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public api: ShopsGroupService,
        public dialog: MatDialog,
        public tagApi: ShopsTagsService
    ) { 
        this.form = this.fb.group({
            title: [''],
            uniacid: [''],
            id: [''],
            desc: [''],
            tags: [[]],
            status: ['']
        });

        this.dialogRef.afterOpen().subscribe(()=>{
            this.form.get('title').setValue(this.data.title);
            this.form.get('uniacid').setValue(this.data.uniacid);
            this.form.get('id').setValue(this.data.id);  
            this.form.get('desc').setValue(this.data.desc);
            this.form.get('tags').setValue(this.data.tags);  
            this.form.get('status').setValue(this.data.status);  
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

    onSelect(e: any){
        this.form.get('tags').setValue(e);
    }

    addTags(){
        const dialogRef = this.dialog.open(ShopsTagsAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.tagApi.add(res);
            }
        });
    }
}