import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../../core/api';

@Component({
    selector: 'member-select-dialog',
    templateUrl: './member-select-dialog.html',
    styleUrls: ['./member-select-dialog.scss']
})
export class MemberSelectDialog implements OnInit {
    members: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialogRef<any>
    ) { }

    ngOnInit() {
        this.api.mpost('member.getSystem', {}).subscribe((res: any) => {
            this.members = res.info;
        });
    }

    select(scope: any) {
        let member = this.members[scope.index];
        this.dialog.close(member);
    }

    close() {
        this.dialog.close();
    }
}
