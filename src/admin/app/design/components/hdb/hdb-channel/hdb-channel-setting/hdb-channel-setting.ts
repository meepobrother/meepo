import { Component, OnInit, Input } from '@angular/core';
import { HdbChannelDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { GroupsDialogSelect } from '../../../../../meepo/src/groups-dialog-select/groups-dialog-select';
import { SelectPageDialog } from '../../../../../share/setting';
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
        dialogRef.afterClosed().subscribe((res: any)=>{
            if(res){
                this.widget.items = res;
                console.log(res);
            }
        });
    }
    edit(item: any, index: number){

    }
    delete(item: any, index: number){
        this.widget.items.splice(index,1);
    }

    selectLink(item: any){
        let dialogRef = this.dialog.open(SelectPageDialog);
        dialogRef.afterClosed().subscribe(link => {
            item.link = link + '&gid='+item.id;
            console.log(item.link);
        });
    }

    nextPage(item: any){

    }
}