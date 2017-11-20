import { Component, OnInit, Input } from '@angular/core';
import { HelpRunnerDefault } from '../../../../classes';
import { TitleDescDialog } from '../../../../../meepo/src/index';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'help-runner-setting',
    templateUrl: './help-runner-setting.html',
    styleUrls: ['./help-runner-setting.scss']
})
export class HelpRunnerSetting implements OnInit {
    @Input() widget: HelpRunnerDefault = new HelpRunnerDefault();
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    add(){
        let dialogRef = this.dialog.open(TitleDescDialog);
        dialogRef.afterClosed().subscribe((res: any)=>{
            let {title,desc} = res;
            this.widget.items.push({
                title: title,
                desc: desc
            });
        });
    }

    edit(item: any, index: number){
        let dialogRef = this.dialog.open(TitleDescDialog,{data: item});
        dialogRef.afterClosed().subscribe((res: any)=>{
            let {title,desc} = res;
            this.widget.items[index] = {
                title: title,
                desc: desc
            };
        });
    }

    delete(item: any, index: number){
        this.widget.items.splice(index);
    }
    
}
