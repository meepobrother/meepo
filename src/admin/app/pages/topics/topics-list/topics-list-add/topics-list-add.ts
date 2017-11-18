import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../core';
import { isArray } from '../../../../meepo/util';

@Component({
    selector: 'topics-list-add',
    templateUrl: './topics-list-add.html',
    styleUrls: ['./topics-list-add.scss']
})
export class TopicsListAdd implements OnInit {
    classes: any[] = [];
    form: any = {};
    editor: any;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder,
        public api: ApiService
    ) {
        this.dialog.afterOpen().subscribe(res => {
            let { title, class_id, uniacid, id, desc, content, thumbs } = this.data ||
                { title: '', class_id: '', id: '', desc: '', content: '', thumbs: [], uniacid: '' };
            this.form['title'] = title;
            this.form['class_id'] = class_id;
            this.form['uniacid'] = uniacid;
            this.form['id'] = id;
            this.form['desc'] = desc;
            this.form['content'] = content;
            this.form['thumbs'] = isArray(thumbs) ? thumbs : [];
        });
    }

    onInitEditor(e: any) {
        this.editor = e;
    }
    ngOnInit() {
        this.api.mpost('topics.getListTopicsGroup', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.classes = res.info;
        });
    }
    save() {
        if (this.editor) {
            this.form.content = this.editor.txt.html();
        }
        this.dialog.close(this.form);
    }
    cancel() {
        this.dialog.close();
    }

    close() {
        this.cancel();
    }

    addImage(e: any) {
        this.form.thumbs.push(e);
    }

    onSelectGroup(e: any){
        this.form.class_id = e.id;
    }
}
