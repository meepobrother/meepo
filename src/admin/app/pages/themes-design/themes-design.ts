import { Component, OnInit } from '@angular/core';
import { PageService, ApplicationService, WidgetService, ComponentsService } from '../../design';
import { MatDialog } from '@angular/material';
import { AddPageDialog } from './add-page-dialog';
import { Button } from '../../design';

import {
    ButtonView,
    WeuiCellsView, 
    InputView,
    SliderView,
    UploaderView
} from '../../design/components';

import uuid from 'uuid';

@Component({
    selector: 'themes-design',
    templateUrl: './themes-design.html',
    styleUrls: ['./themes-design.scss']
})
export class ThemesDesign implements OnInit {
    widgets: any[] = [];
    currentWidget: any;
    currentPage: any;
    constructor(
        public page$: PageService,
        public application$: ApplicationService,
        public dialog: MatDialog,
        public widget$: WidgetService,
        public components$: ComponentsService
    ) {
        this.widget$.setCurrentWidget
    }

    addWidget(name: string) {
        this.components$.selectComponent(name);
        const onSelectStream = this.components$.onSelectStream.subscribe(widget=>{
            console.log(widget);
            const newWidget = this.cloneJSON(widget);
            this.widgets.push(newWidget);
            onSelectStream.unsubscribe();
        });
    }

    cloneJSON(e: any) {
        return "object" != typeof e || null == e ? e : JSON.parse(JSON.stringify(e))
    }

    ngOnInit() {
        this.page$.getList();
    }

    setCurrentView(view: any){
        this.currentWidget = view;
    }

    addPage() {
        const dialogRef = this.dialog.open(AddPageDialog);
        dialogRef.afterClosed().subscribe(res => {
            console.log(res);
            if (res) {
                this.page$.add(res);
            }
        });
    }

    deletePage(item: any) {
        this.page$.delete(item);
    }

    editPage(page: any) {
        const dialogRef = this.dialog.open(AddPageDialog, { data: page });
        dialogRef.afterClosed().subscribe(res => {
            console.log(res);
            if (res) {
                this.page$.edit(res);
            }
        });
    }

    savePage(){
        
    }
    // 保存页面
    saveCurrentPage(){
        if(this.currentPage){
            this.currentPage['children'] = this.widgets;
            this.page$.edit(this.currentPage);
        }else{
            console.log('请选择页面');
        }
    }
    productCurrentPage(){
        console.log(this.page$);
    }
    // 设置当前页面
    setCurrentPage(page: any) {
        // 设置激活
        this.page$.list.forEach(page => {
            page.active = false;
        });
        page.active = !page.active;
        this.application$.open();
        // 保存当前页面
        this.currentPage = page;
        this.currentWidget = page;
        this.widgets = page.children || [];
    }
}
