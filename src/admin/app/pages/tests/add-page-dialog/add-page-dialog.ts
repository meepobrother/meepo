import { Component, OnInit, Inject } from '@angular/core';
import { PageService } from '../../../design';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import uuid from 'uuid';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
    selector: 'add-page-dialog',
    templateUrl: './add-page-dialog.html',
    styleUrls: ['./add-page-dialog.scss']
})
export class AddPageDialog implements OnInit {
    form: FormGroup;
    constructor(
        public api: PageService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            title: [''],
            code: [uuid()]
        });

        this.dialog.afterOpen().subscribe(()=>{
            const { title, code } = this.data;
            this.form.get('title').setValue(title);
            this.form.get('code').setValue(code);
        });
     }

    ngOnInit() { 
        
    }

    save(){
        this.dialog.close(this.form.value);
    }
}