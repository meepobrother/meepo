import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { MatDialog } from '@angular/material';
import { AddGroupDialog, AddPageDialog } from '../../dialog';
import * as store from 'store';
import { LayoutContainer } from '../../../../design';
import { CatalogGroup } from '../model';
const cacheKey = 'cataData.data';

import { Store } from '@ngrx/store';

@Component({
    selector: 'catalog-section',
    templateUrl: './catalog-section.html',
    styleUrls: ['./catalog-section.scss']
})
export class CatalogSection implements OnInit {
    list: CatalogGroup[] = [];
    currentGroupIndex: number;
    constructor(
        public catalogService: CatalogService,
        public dialog: MatDialog,
        public cd: ChangeDetectorRef,
        public store: store<any>
    ) {
        this.list = store.get(cacheKey, []);
        this.store.subscribe(res=>{
            console.log(res);
        })
    }

    ngOnInit() { }

    onGroup(index: number) {
        this.currentGroupIndex = index;
    }

    clearEvent(evt: any) {
        evt.stopPropagation();
    }

    // 添加应用
    showAddGroupDialog() {
        const dialogRef = this.dialog.open(AddGroupDialog);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.list.push(res);
            }
        });
    }
    // 编辑应用
    showEditGroupDialog(group: any) {
        const dialogRef = this.dialog.open(AddGroupDialog, { data: group });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                for (let i = 0; i < this.list.length; i++) {
                    if (this.list[i].id == res.id) {
                        this.list[i] = res;
                    }
                }
                this.saveData();
            }
        });
    }
    // 添加应用页面
    showAddGroupPageDialog(group: any) {
        console.log(group);
        const dialogRef = this.dialog.open(AddPageDialog, { data: { cata_id: group.id } });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                group['pages'].push(res);
                this.saveData();
            }
        });
    }

    removeGroup(group: any) {
        const index = this.list.indexOf(group);
        this.list.splice(index, 1);
        this.saveData();
    }

    saveData(){
        store.set(cacheKey,this.list);
    }

    showAddPageDialog(group: CatalogGroup) {
        const dialogRef = this.dialog.open(AddPageDialog);
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                group.pages.push(res);
            }
        });
    }
}

