import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../../../core/api';

@Component({
    selector: 'actives-list-add',
    templateUrl: './actives-list-add.html',
    styleUrls: ['./actives-list-add.scss']
})
export class ActivesListAdd implements OnInit {
    groups: any[] = [];
    form: any = {};
    editor: any;

    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public api: ApiService
    ) {
        this.dialog.afterOpen().subscribe((res: any) => {
            let { title, desc, content, group_id, uniacid, id } = this.data ||
                { title: '', desc: '', content: '', group_id: '', uniacid: '', id: '' };

            this.form['title'] = title;
            this.form['desc'] = desc;
            this.form['content'] = content;
            this.form['group_id'] = group_id;
            this.form['uniacid'] = uniacid;
            this.form['id'] = id;
        });
    }

    ngOnInit() {
        this.api.mpost('actives.getListActivesGroup', {}).subscribe((res: any) => {
            this.groups = res.info;
        });
    }

    onSelect(e: any) {
        this.form['group_id'] = e.id;
    }

    close() {
        this.dialog.close();
    }

    save() {
        this.form['content'] = this.editor.txt.html();
        this.dialog.close(this.form);
    }

    onInitEditor(e: any) {
        this.editor = e;
    }
}
