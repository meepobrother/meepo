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
        @Inject(MAT_DIALOG_DATA) data: any,
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
    }

    ngOnInit() { }

    cancel() { 
        this.dialogRef.close();
    }

    add() {
        this.dialogRef.close(this.form.value);
    }

    onChangeShopers(e: any){
        console.log('onChangeShopers',e);
        this.form.get('shopers').setValue(e);
    }

    onChangeKefus(e: any){
        console.log('onChangeKefus',e);
        
        this.form.get('kefus').setValue(e);
    }

    onChangeEmployers(e: any){
        console.log('onChangeEmployers',e);
        
        this.form.get('employers').setValue(e);
    }

    delete() { }
}