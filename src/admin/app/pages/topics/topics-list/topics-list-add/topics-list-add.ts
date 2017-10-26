import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../core';

@Component({
    selector: 'topics-list-add',
    templateUrl: './topics-list-add.html',
    styleUrls: ['./topics-list-add.scss']
})
export class TopicsListAdd implements OnInit {
    classes: any[] = [];
    form: FormGroup;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder,
        public api: ApiService
    ) { 
        this.form = this.fb.group({
            title: [''],
            class_id: [''],
            desc: [''],
            content: [''],
            id: [''],
            uniacid: ['']
        });

        this.dialog.afterOpen().subscribe(res=>{
            let { title, class_id, uniacid, id, desc, content} = this.data;
            this.form.get('title').setValue(title);
            this.form.get('class_id').setValue(class_id);
            this.form.get('uniacid').setValue(uniacid);
            this.form.get('id').setValue(id);
            this.form.get('desc').setValue(desc);
            this.form.get('content').setValue(content);
        });
    }
    ngOnInit() {
        this.api.mpost('topics.getListTopicGroup',{page: 1, psize: 30}).subscribe((res: any)=>{
            this.classes = res.info;
            if(this.classes.length>0){
                const item = this.classes[0];
                this.form.get('class_id').setValue(item.id);
            }
        });
    }
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
