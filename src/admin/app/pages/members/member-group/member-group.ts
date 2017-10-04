import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { AddGroup } from './add-group';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'member-group',
    templateUrl: './member-group.html',
    styleUrls: ['./member-group.scss']
})
export class MemberGroup implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MdDialog
    ) { }

    ngOnInit() {
        this.api.mget('member.getMemberGroup').subscribe(res => {
            if (res) {
                this.list = res['info'];
            } else {
                this.update();
            }
        });
    }

    update() {
        this.api.mget('member.update').subscribe(res => { })
    }

    edit(item: any) {
        const dialogRef = this.dialog.open(AddGroup, { data: item });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.api.mpost('member.updateMemberGroup', result).subscribe(res => {
                    if (res['info']) {
                        this.list.unshift(res['info']);
                    } else if (res['type']) {
                        this.update();
                    } else {
                        this.update();
                    }
                }, error => {
                    this.update();
                }, () => {
                    console.log('完成了');
                });
            }
        });
    }

    updateStatus(item: any) {
        this.api.mpost('member.updateMemberGroupStatus', item).subscribe(res => { });
        if (item.status == 0) {
            item.status = 1;
        } else {
            item.status = 0;
        }
    }

    addGroup() {
        const dialogRef = this.dialog.open(AddGroup);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.api.mpost('member.addMemberGroup', result).subscribe(res => {
                    if (res['info']) {
                        this.list.unshift(res['info']);
                    } else if (res['type']) {
                        this.update();
                    } else {
                        this.update();
                    }
                }, error => {
                    this.update();
                }, () => {
                    console.log('完成了');
                });
            }
        });
    }
}