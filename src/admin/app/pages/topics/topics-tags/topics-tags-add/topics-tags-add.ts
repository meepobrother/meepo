import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
    selector: 'topics-tags-add',
    templateUrl: './topics-tags-add.html',
    styleUrls: ['./topics-tags-add.scss']
})
export class TopicsTagsAdd implements OnInit {
    form: FormGroup;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({

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
