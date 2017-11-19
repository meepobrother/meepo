import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { ShopsListAdd } from './shops-list-add/shops-list-add';

import { MemberSelectDialog } from '../../../meepo/src/index';

import { isArray } from '../../../meepo/util';
@Component({
    selector: 'shops-list',
    templateUrl: './shops-list.html',
    styleUrls: ['./shops-list.scss']
})
export class ShopsList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('shops.update').subscribe(() => { });
        this.api.mpost('shops.getListShops').subscribe((res: any) => {
            this.list = res.info;
        });
    }

    add() {
        const dialogRef = this.dialog.open(ShopsListAdd, { data: {} });
        dialogRef.afterClosed().subscribe(res => {
            if (res && res.title) {
                this.api.mpost('shops.addShop', res).subscribe((data: any) => {
                    this.getList();
                    this.list.push(data.info);
                });
            }
        });
    }

    edit(index: number) {
        const dialogRef = this.dialog.open(ShopsListAdd, { data: this.list[index] });
        dialogRef.afterClosed().subscribe(res => {
            if (res && res.title) {
                this.api.mpost('shops.addShop', res).subscribe((data: any) => {
                    this.list[index] = data.info;
                });
            }
        });
    }

    delete(index: number) {
        this.api.mpost('shops.deleteShop', this.list[index]).subscribe((res => {
            this.list.splice(index, 1);
        }));
    }

    addMember(type: string, index: number) {
        let dialogRef = this.dialog.open(MemberSelectDialog);
        dialogRef.afterClosed().subscribe((member: any) => {
            if (member && member.openid) {
                if (isArray(this.list[index][type])) {
                    this.list[index][type].push({ openid: member.openid, avatar: member.avatar, nickname: member.nickname });
                } else {
                    this.list[index][type] = [
                        { openid: member.openid, avatar: member.avatar, nickname: member.nickname }
                    ]
                }
                // 更新
                console.log(this.list[index]);
                this.api.mpost('shops.updateShopMembers', { type: type, data: this.list[index][type], shop_id: this.list[index].id }).subscribe(res => {
                    console.log(res);
                });
            }
        });
    }
}