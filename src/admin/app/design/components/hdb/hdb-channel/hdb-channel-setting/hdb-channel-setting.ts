import { Component, OnInit, Input } from '@angular/core';
import { HdbChannelDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { GroupsDialogSelect } from '../../../../../meepo/src/groups-dialog-select/groups-dialog-select';
@Component({
    selector: 'hdb-channel-setting',
    templateUrl: './hdb-channel-setting.html',
    styleUrls: ['./hdb-channel-setting.scss']
})
export class HdbChannelSetting implements OnInit {
    @Input() widget: HdbChannelDefault = new HdbChannelDefault();
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    selectSource(){
        let dialogRef = this.dialog.open(GroupsDialogSelect);
    }
}