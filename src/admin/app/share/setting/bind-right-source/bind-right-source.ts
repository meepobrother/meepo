import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../../core';
@Component({
    selector: 'bind-right-source',
    templateUrl: './bind-right-source.html',
    styleUrls: ['./bind-right-source.scss']
})
export class BindRightSource implements OnInit {
    roles: any[] = [
        {
            title: '站长',
            active: false,
            code: 'roles.admin'
        },
        {
            title: '管理员',
            active: false,
            code: 'roles.manager'
        },
        {
            title: '跑腿员',
            active: false,
            code: 'roles.runner'
        },
        {
            title: '会员',
            active: false,
            code: 'roles.member'
        },
        {
            title: '粉丝',
            active: false,
            code: 'roles.fans'
        },
        {
            title: '游客',
            active: false,
            code: 'roles.none'
        }
    ];
    groups: any[] = [];
    scens: any[] = [
        {
            title: '微信端',
            active: false,
            code: 'scens.wechat'
        },
        {
            title: '强制关注',
            active: false,
            code: 'scens.follow'
        },
        {
            title: '浏览器',
            active: false,
            code: 'scens.browser'
        }
    ];

    rules: any[] = [
        {
            title: '手机号',
            active: false,
            code: 'rules.mobile'
        }, {
            title: '姓名',
            active: false,
            code: 'rules.realname'
        }, {
            title: '身份证',
            active: false,
            code: 'rules.image.card'
        }, {
            title: '驾驶证',
            active: false,
            code: 'rules.dirver.card'
        }
    ];

    selects: any = {};
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public api: ApiService
    ) {
        this.dialog.afterOpen().subscribe((res: any) => {
            if (this.data) {
                // let { roles, groups, scens, rules } = this.data;
                // group 会员组 检查变动
                // this.selects = this.data;
            }
        });
    }

    ngOnInit() {
        this.getGroups();
    }

    getGroups() {
        this.api.mpost('member.getMemberGroup', { page: 1, psize: 30 }).subscribe((res: any) => {
            let groups = res.info;
            groups.map((res: any) => {
                res.code = `groups.${res.id}`;
            });
            this.groups = res.info;
        });
    }

    close() {
        this.dialog.close();
    }

    finish() {
        this.dialog.close(this.selects);
    }

    onSelect(type: string, role: any) {
        this.selects[type] = role;
    }
}

