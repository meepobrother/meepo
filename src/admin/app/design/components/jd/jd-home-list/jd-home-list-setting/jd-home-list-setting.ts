import { Component, OnInit, Input } from '@angular/core';
import { JdHomeListDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { ImageLinkTitleSelect } from '../../../../../share/setting';
@Component({
    selector: 'jd-home-list-setting',
    templateUrl: './jd-home-list-setting.html',
    styleUrls: ['./jd-home-list-setting.scss']
})
export class JdHomeListSetting implements OnInit {
    @Input() widget: JdHomeListDefault = new JdHomeListDefault();
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    add(){
        let item = {
            title: '测试',
            icon: ''
        };
        this.widget.items.push(item);
    }

    edit(item: any, index: number){
        let dialogRef = this.dialog.open(ImageLinkTitleSelect, {data: item});
        dialogRef.afterClosed().subscribe((res: any)=>{
            if(res && res.title){
                let { title, image, link } = res;
                this.widget.items[index] = {title: title, image: image, link: link};
            }
        });
    }

    delete(item: any, index: number){
        this.widget.items.splice(index,1);
    }
}
