import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../../../core/api';
@Component({
    selector: 'skills-list-edit',
    templateUrl: './skills-list-edit.html',
    styleUrls: ['./skills-list-edit.scss']
})
export class SkillsListEdit implements OnInit {
    groups: any[] = [];
    form: any = {};
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public api: ApiService
    ) {
        this.dialog.afterOpen().subscribe(res => {
            let { title, group_id, uniacid, id, desc } = this.data
                || { title: '', group_id: '', uniacid: '', id: '', desc: '' };
                this.form['title'] = title;
                this.form['group_id'] = group_id;
                this.form['uniacid'] = uniacid;
                this.form['id'] = id;
                this.form['desc'] = desc;
                console.log(this.form);
        });
    }
    ngOnInit() {
        this.api.mpost('skills.getListSkillsGroup',{}).subscribe((res: any)=>{
            this.groups = res.info;
        });
    }

    save() {
        this.dialog.close(this.form);
    }

    cancel() {
        this.dialog.close();
    }

    onSelect(e: any){
        this.form['group_id'] = e.id;
    }
}
