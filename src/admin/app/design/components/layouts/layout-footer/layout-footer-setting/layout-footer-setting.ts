import { Component, OnInit, Input } from '@angular/core';
import { LayoutFooter } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { IconLinkSelect } from '../../../../../share/setting';
import { WidgetService } from '../../../../../share/services';
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
        console.log(this.widget);
        this.widget.children = this.widget.children || [];
    }

    addItem() {
        this.widget.children.push({
            title: '标题',
            icon: 'fa fa-plus-square'
        });
    }

    onChange() {
        console.log(this.widget);
    }

    deleteItem(item: any) {
        const index = this.widget.children.indexOf(item);
        this.widget.children.splice(index, 1);
    }

    linkItem(item: any) {
        const dialogRef = this.dialog.open(IconLinkSelect, { data: item });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                const { link, icon, title } = res;
                item['link'] = link;
                item['icon'] = icon;
                item['title'] = title;
            }
        });
    }

    selectIcon(item: any) {

    }

    activeItem(item: any) {
        this.widget.children.map((res: any) => {
            res.active = false;
        });
        item.active = !item.active;
    }
}