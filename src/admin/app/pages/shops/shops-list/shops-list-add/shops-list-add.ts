import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'shops-list-add',
    templateUrl: './shops-list-add.html',
    styleUrls: ['./shops-list-add.scss']
})
export class ShopsListAdd implements OnInit {
    form: FormGroup;
    constructor(
        public api: ApiService,
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder,
    ) { 
        this.form = this.fb.group({
            title: [''],
            mobile: [''],
            location: this.fb.group({
                lat: [''],
                lng: [''],
                address: [''],
                detail: ['']
            }),
            desc: [''],
            content: [''],
            shopers: [[]],
            kefus: [[]],
            employers: [[]],
            group: [''],
            tag: ['']
        });

        this.dialogRef.afterOpen().subscribe((res: any)=>{
            console.log(res);
            let { title, mobile, location, desc, content, shopers, kefus, employers, group, tag } = this.data;
            this.form.get('title').setValue(title);
            this.form.get('mobile').setValue(mobile);
            this.form.get('location').setValue(location);
            this.form.get('desc').setValue(desc);
            this.form.get('content').setValue(content);
            this.form.get('shopers').setValue(shopers);
            this.form.get('kefus').setValue(kefus);
            this.form.get('employers').setValue(employers);
            this.form.get('group').setValue(group);
            this.form.get('tag').setValue(tag);
        });
    }

    ngOnInit() { }

    cancel() { 
        this.dialogRef.close();
    }

    add() {
        this.dialogRef.close(this.form.value);
    }

    onChangeShopers(e: any){
        this.form.get('shopers').setValue(e);
    }

    onChangeKefus(e: any){
        this.form.get('kefus').setValue(e);
    }

    onChangeEmployers(e: any){
        this.form.get('employers').setValue(e);
    }

    delete() { }
}