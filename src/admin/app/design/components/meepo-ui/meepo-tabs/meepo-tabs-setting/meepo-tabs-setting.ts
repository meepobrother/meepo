import { Component, OnInit, Input } from '@angular/core';
import { MeepoTabsDefault } from '../../../../classes';
import { TitleLinkSelect } from '../../../../../meepo/src';
import { MatDialog } from '@angular/material';
@Component({
    selector: 'meepo-tabs-setting',
    templateUrl: './meepo-tabs-setting.html',
    styleUrls: ['./meepo-tabs-setting.scss']
})
export class MeepoTabsSetting implements OnInit {
    @Input() widget: MeepoTabsDefault = new MeepoTabsDefault();
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    add(){
        let dialogRef = this.dialog.open(TitleLinkSelect);
        dialogRef.afterClosed().subscribe((res: any)=>{
            let {title,link} = res;
            this.widget.items.push({title: title, link: link});
        });
    }

    edit(item: any, index: number){
        let dialogRef = this.dialog.open(TitleLinkSelect,{data: item});
        dialogRef.afterClosed().subscribe((res: any)=>{
            let {title,link} = res;
            this.widget.items[index] = {title: title, link: link};
        });
    }

    delete(item: any, index: number){
        this.widget.items.splice(index, 1);
    }
    
}
