import { Component, ViewChild } from '@angular/core';
import {
    PageService, ApplicationService, WidgetService,
    ComponentsService, LayoutView, LayoutService, LayoutContainer
} from '../../design';

import { MatDialog } from '@angular/material';

import { CatalogService, CatalogSection } from './section';


@Component({
    selector: 'themes-design',
    templateUrl: './themes-design.html',
    styleUrls: ['./themes-design.scss']
})
export class ThemesDesign {

    @ViewChild(LayoutView) _view: LayoutView;
    @ViewChild(CatalogSection) _catalog: CatalogSection;

    // 分组列表
    currentWidget: any;
    currentPage: any = new LayoutContainer();

    // 当前容器
    _container: any;
    constructor(
        public page$: PageService,
        public application$: ApplicationService,
        public dialog: MatDialog,
        public widget$: WidgetService,
        public components$: ComponentsService,
        public layout$: LayoutService,
        public catalogService: CatalogService
    ) {
        this.layout$.onChange.subscribe(container => {
            this._container = container;
        });
        // 设置当前
        this.widget$.setCurrentWidgetStream.subscribe(res => {
            this.currentWidget = res;
            this._catalog.saveData();
        });
        // 页面激活状态变化时
        this.catalogService.setCurrentPageStream.subscribe((page)=>{
            this.application$.open();
            // 保存当前页面
            this.currentWidget = page;
            this.currentPage = page;
            this._catalog.saveData();
        });
    }

    // 页面导航

    onHeader() {
        this.layout$.onHeader(this.currentPage.header);
    }

    onFooter() {
        this.layout$.onFooter(this.currentPage.footer);
    }

    onBody() {
        this.layout$.onBody(this.currentPage.body);
    }

    onMenu() {
        this.layout$.onMenu(this.currentPage.menu);
    }
    // 页面导航


    // 添加组件
    addWidget(name: string) {
        this.components$.selectComponent(name);
        // 选择后 添加
        const onSelectStream = this.components$.onSelectStream.subscribe(widget => {
            // 判断容器类型
            this.addToContainer(widget);
            this._catalog.saveData(); 
            onSelectStream.unsubscribe();
        });
    }

    onAdd(widget: any){
        console.log(widget);
        this.addToContainer(widget);
        this._catalog.saveData();
        console.log(this._container);
    }

    selectWidget(name: string){
        this.components$.selectComponent(name);
        // 选择后 添加
        const onSelectStream = this.components$.onSelectStream.subscribe(widget => {
            // 判断容器类型
            this.addToContainer(widget);
            this._catalog.saveData();        
            onSelectStream.unsubscribe();
        });
    }

    addToContainer(widget: any) {
        switch (this._container.type) {
            case 'layout-body':
                this.currentPage.body.children.push(widget);
                break;
            case 'layout-header':
                this.currentPage.header.children.push(widget);
                break;
            case 'layout-footer':
                this.currentPage.footer.children.push(widget);
                break;
            case 'layout-menu':
                this.currentPage.menu.children.push(widget);
                break;
            default:
                this.currentPage.body.children.push(widget);
                break;
        }
        this._catalog.saveData();
    }
    // 添加组件
    
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
            this.page$.edit(this.currentPage);
        } else {
            console.log('请选择页面');
        }
        setTimeout(() => {
            this.setSaveBtnSuccess();
        }, 800);
        this._catalog.saveData();
    }

}
