import { Component, OnInit, Input } from '@angular/core';
import { TopicsListDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { BindDataSource } from '../../../../../share/setting';

@Component({
    selector: 'topics-list-setting',
    templateUrl: './topics-list-setting.html',
    styleUrls: ['./topics-list-setting.scss']
})
export class TopicsListSetting implements OnInit {
    @Input() widget: TopicsListDefault = new TopicsListDefault();
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    selectDataSource(){
        const dialogRef = this.dialog.open(BindDataSource);
        dialogRef.afterClosed().subscribe(res=>{
            console.log('选择的数据是',res);
        });
    }
}