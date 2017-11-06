import { Component, ViewChild, OnDestroy } from '@angular/core';
import {
    ComponentsService, LayoutView, WeuiPage, LayoutService,
    Widget, LayoutContainerModel
} from '../../design';

import { MatDialog } from '@angular/material';
import { ApiService } from '../../core';


import { DataPerService, CatalogService, PageService, ApplicationService, WidgetService } from '../../share/services';
import { Router, ActivatedRoute } from '@angular/router';

import {
    ButtonView,
    WeuiCellsView,
    InputView,
    SliderView,
    UploaderView
} from '../../design/components';

import { CatalogSection } from '../../share/section';
import uuid from 'uuid';

@Component({
    selector: 'themes-design',
    templateUrl: './themes-design.html',
    styleUrls: ['./themes-design.scss']
})
export class ThemesDesign implements OnDestroy {

    @ViewChild(LayoutView) _view: LayoutView;
    @ViewChild(CatalogSection) _catalog: CatalogSection;

    showComponent: boolean = false;
    // 分组列表
    currentWidget: any;
    currentPage: any = new LayoutContainerModel();

    // 当前容器
    _container: any;
    app_id: any;

    wxappHref: string;
    showRight: boolean = false;

    widget$: WidgetService;
    catalogService: CatalogService;
    constructor(
        public application$: ApplicationService,
        public widgetService: WidgetService,
        public layout$: LayoutService,
        public catalogService$: CatalogService,
        public api: ApiService,
        public router: Router,
        public route: ActivatedRoute,
        public components$: ComponentsService
    ) {
        this.widget$ = this.widgetService.getWidgetInstance();
        this.catalogService = this.catalogService$.getCatalogInstance();

        this.layout$.onChange.subscribe(container => {
            this._container = container;
            this.application$.open();
        });
        // 设置当前
        this.widget$.setCurrentWidgetStream.subscribe(res => {
            this.currentWidget = res;
            this.application$.open();
        });

        this.widget$.removeWidgetStream.subscribe(widget => {
            const index = this.currentPage.body.children.indexOf(widget);
            this.currentPage.body.children.splice(index, 1);
        });
        // 页面激活状态变化时
        this.catalogService.setCurrentPageStream.subscribe((page) => {
            this.application$.open();
            // 保存当前页面
            this.currentWidget = page;
            this.currentPage = page;

            this.showRight = true;
        });

        this.route.params.subscribe(res => {
            this.app_id = res.id;
            this.wxappHref = 'https://meepo.com.cn/imeepos/index.php?c=wxapp&do=build&id=' + this.app_id;
            this.widget$.setAppId(this.app_id);
        });

        this.route.queryParams.subscribe(res => {
            if (res.manager) {
                this.showComponent = true;
            }
        });
    }

    // 页面导航

    onHeader() {
        this.layout$.onHeader(this.currentPage.header);
    }

    ngOnDestroy() {
        this.showRight = false;
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
    addWidget(widget: any) {
        this.components$.createWidget(widget.type);
        const create = this.components$.onCreateStream.subscribe(res => {
            this.addToContainer(res);
            create.unsubscribe();
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
        // this.currentPage['html_content'] = this._view.ele.nativeElement.outerHTML as string;
        // console.log(this.currentPage);
        this.api.mpost('app.editAppCatalogPage', this.currentPage).subscribe(res => {
            console.log(res);
            setTimeout(() => {
                this.setSaveBtnSuccess();
            }, 800);
        });
    }

    doPreview() {
        this.router.navigate(['/themes/preview/', this.currentPage.id])
    }

    close() {
        this.showRight = false;
    }
}
