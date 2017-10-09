import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {
    PageService, ApplicationService, WidgetService,
    ComponentsService, LayoutView, WeuiPage
} from '../../design';
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
export class ThemesDesign implements OnInit, AfterViewInit {

    @ViewChild(LayoutView) _view: LayoutView;


    widgets: any[] = [];
    currentWidget: any;
    currentPage: any = new WeuiPage();
    constructor(
        public page$: PageService,
        public application$: ApplicationService,
        public dialog: MatDialog,
        public widget$: WidgetService,
        public components$: ComponentsService
    ) {
        // 设置当前
        this.widget$.setCurrentWidgetStream.subscribe(res => {
            this.currentWidget = res;
        });
        // 选择后 添加
        const onSelectStream = this.components$.onSelectStream.subscribe(widget => {
            const newWidget = this.cloneObj(widget);
            this.widget$.addItem(newWidget);
            onSelectStream.unsubscribe();
        });
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit', this._view);
    }


    // 添加item
    addWidget(name: string) {
        this.components$.selectComponent(name);
    }

    cloneObj(obj: any) {
        var newObj = {};
        if (obj instanceof Array) {
            newObj = [];
        }
        for (var key in obj) {
            var val = obj[key];
            //newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; //arguments.callee 在哪一个函数中运行，它就代表哪个函数, 一般用在匿名函数中。  
            newObj[key] = typeof val === 'object' ? this.cloneObj(val) : val;
        }
        return newObj;
    }

    ngOnInit() {
        this.page$.getList();
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
    // 删除页面
    deletePage(item: any) {
        this.page$.delete(item);
    }
    // 编辑页面
    editPage(page: any) {
        const dialogRef = this.dialog.open(AddPageDialog, { data: page });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.page$.edit(res);
            }
        });
    }
    // 保存页面
    savePage() {

    }
    // 保存页面
    saveBtn: any = {
        loading: false,
        title: '立即保存'
    };
    // 保存中
    setSaveBtnLoading() {
        this.saveBtn = {
            loading: true,
            title: '保存中...'
        }
    }
    // 保存成功
    setSaveBtnSuccess() {
        this.saveBtn = {
            loading: false,
            title: '立即保存'
        }
    }
    // 保存当前页面
    saveCurrentPage() {
        this.setSaveBtnLoading();
        if (this.currentPage) {
            this.currentPage['children'] = this.widgets;
            this.page$.edit(this.currentPage);
        } else {
            console.log('请选择页面');
        }
        setTimeout(() => {
            this.setSaveBtnSuccess();
        }, 800);
    }

    productCurrentPage() {
        console.log(this.page$);
    }
    // 设置当前页面
    setCurrentPage(evt: any, page: any) {
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


        evt.stopPropagation();
    }
}
