import { Component, OnInit, Input } from '@angular/core';
import { RunnerListDefault } from '../../../../classes';
import { CreateBtnDialog } from '../../../../../dialogs';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'runner-list-setting',
    templateUrl: './runner-list-setting.html',
    styleUrls: ['./runner-list-setting.scss']
})
export class RunnerListSetting implements OnInit {

    @Input() widget: RunnerListDefault = new RunnerListDefault();
    openDataDialog: boolean;

    activeItem: any;
    activeIndex: number;

    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.widget['btns'] = this.widget['btns'] || [];
        this.widget['items'] = this.widget['items'] || [];
    }

    setDefault(item: any) {
        this.widget.items.map(res => {
            res['active'] = false;
        });
        item['active'] = true;
    }

    delete(index: number) {
        this.widget.items.splice(index);
    }

    add() {
        let item = { title: '测试', type: 'btn btn-primary btn-xs' };
        this.widget.items.push(item);
    }

    addBtn() {
        let item = { title: '测试', color: 'btn-primary', size: 'btn-xs' }
        let dialogRef = this.dialog.open(CreateBtnDialog, { data: item });
        dialogRef.afterClosed().subscribe((res: any) => {
            this._addBtn(res);
        });
    }

    editBtn(item: any, index: number) {
        let dialogRef = this.dialog.open(CreateBtnDialog, { data: item });

        dialogRef.afterClosed().subscribe((res: any) => {
            this._editBtn(index, res);
        });
    }

    deleteBtn(index: number) {
        this.widget.btns.splice(index, 1);
    }

    private _editBtn(index: number, item: any) {
        if (item.title) {
            this.widget.btns[index] = item;
        }
    }

    private _addBtn(btn: any) {
        if (btn.title) {
            this.widget.btns.push(btn);
        }
    }

    dataSelectData(item, index) {
        this.openDataDialog = true;
        this.activeItem = item;
        this.activeIndex = index;
    }

    setStatus(__do: string, __post: any) {
        this.activeItem['__do'] = __do;
        this.activeItem['__post'] = __post;
        this.widget.items[this.activeIndex] = this.activeItem;
        this.openDataDialog = false;
    }
}
