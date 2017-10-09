import {
    Component, OnInit, Input,
    ViewChild, ViewContainerRef,
    ComponentFactoryResolver, ElementRef,
    ViewEncapsulation, AfterViewInit, OnDestroy,
    OnChanges, Renderer2, HostListener
} from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

import { COMPONENTS_SETTING } from '../../components';

@Component({
    selector: 'free-widget-setting',
    templateUrl: './free-widget-setting.html',
    styleUrls: ['./free-widget-setting.scss']
})
export class FreeWidgetSetting implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    @HostListener('mouseover', ['$event'])
    mouseover() {
        // 鼠标移动到改元素时 改变设置
    }
    // 设置项目
    @Input() widget: any;
    // 组件地图
    componentMap: any = COMPONENTS_SETTING;
    // ref
    compRef: any;
    // 父亲
    parentForm: any;
    @ViewChild('placeholder', { read: ViewContainerRef }) placeholder: ViewContainerRef;

    constructor(
        private compFactoryResolver: ComponentFactoryResolver,
        private render: Renderer2,
        private ele: ElementRef,
        private viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit() { }

    ngAfterViewInit() { }
    // 渲染组件
    renderWidgetContainer() {
        this.compRef && this.compRef.destroy()
        if (this.widget) {
            const component = this.componentMap[this.widget.type];
            if (component) {
                const compFactory = this.compFactoryResolver.resolveComponentFactory(component);
                this.compRef = this.placeholder.createComponent(compFactory);
                this.widget.parentForm = this.parentForm;
                this.compRef.instance.widget = this.widget;
            }
        }
    }
    // 离开时清理内存
    ngOnDestroy() {
        this.compRef && this.compRef.destroy()
    }
    // 参数改变时 重新渲染
    ngOnChanges() {
        this.renderWidgetContainer();
    }
}

