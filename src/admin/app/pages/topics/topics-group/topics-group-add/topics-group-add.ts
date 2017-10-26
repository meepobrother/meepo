import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
    selector: 'topics-group-add',
    templateUrl: './topics-group-add.html',
    styleUrls: ['./topics-group-add.scss']
})
export class TopicsGroupAdd implements OnInit {
    form: FormGroup;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            title: [''],
            id: [''],
            uniacid: ['']
        });

        this.dialog.afterOpen().subscribe(res=>{
            let { title , id, uniacid} = this.data;
            this.form.get('title').setValue(title);
            this.form.get('id').setValue(id);
            this.form.get('uniacid').setValue(uniacid);
        });
    }
    ngOnInit() { }
    save(){
        this.dialog.close(this.form.value);
    }
    cancel(){
        this.dialog.close();
    }

    close(){
        this.cancel();
    }
}
