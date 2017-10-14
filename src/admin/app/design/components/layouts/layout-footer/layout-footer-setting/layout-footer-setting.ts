import { Component, OnInit, Input } from '@angular/core';
import { LayoutFooter } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { SelectPageDialog } from '../../../../../components/select-page-dialog';
import { WidgetService} from '../../../../services';
@Component({
    selector: 'layout-footer-setting',
    templateUrl: './layout-footer-setting.html',
    styleUrls: ['./layout-footer-setting.scss']
})
export class LayoutFooterSetting implements OnInit {
    @Input() widget: LayoutFooter = new LayoutFooter();
    constructor(
        public dialog: MatDialog,
        public widget$: WidgetService
    ) { }

    ngOnInit() { 
        this.widget.children = this.widget.children || [];
    }

    addItem(){
        this.widget.children.push({
            title: '标题',
            icon: 'fa fa-plus-square'
        });
    }

    onChange(){
        console.log(this.widget);        
    }

    deleteItem(item: any){
        const index = this.widget.children.indexOf(item);
        this.widget.children.splice(index,1);
    }

    linkItem(item: any){
       const dialogRef = this.dialog.open(SelectPageDialog, {data: {app_id: this.widget$.getAppId()}});
       dialogRef.afterClosed().subscribe(page=>{
            item['link'] = page.id;
            item.title = page.title;
       });
    }

    selectIcon(item: any){

    }
}