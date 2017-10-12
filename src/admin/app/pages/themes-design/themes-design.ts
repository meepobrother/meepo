import { Component, ViewChild } from '@angular/core';
import {
    ApplicationService, WidgetService,
    LayoutView, LayoutService, LayoutContainer
} from '../../design';

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
        public application$: ApplicationService,
        public widget$: WidgetService,
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

    onAdd(widget: any){
        this.addToContainer(widget);
        this._catalog.saveData();
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
        setTimeout(() => {
            this.setSaveBtnSuccess();
        }, 800);
    }

}
