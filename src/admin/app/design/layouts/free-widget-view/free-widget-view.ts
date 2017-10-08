import {
    Component, OnInit, Input,
    ViewChild, ViewContainerRef,
    ComponentFactoryResolver, ElementRef,
    ViewEncapsulation, AfterViewInit, OnDestroy,
    OnChanges, Renderer2, HostListener
} from '@angular/core';
import { WidgetService } from '../../services';
import { ComponentPortal } from '@angular/cdk/portal';

import { COMPONENTS_VIEW } from '../../components';

@Component({
    selector: 'free-widget-view',
    templateUrl: './free-widget-view.html',
    styleUrls: ['./free-widget-view.scss']
})
export class FreeWidgetView implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    @HostListener('mouseover', ['$event'])
    mouseover() {
        // 鼠标移动到改元素时 改变设置
    }
    // 组件列表
    _widget: any;
    @Input()
    set widget(val: any) {
        this._widget = val;
    }
    componentMap: any = COMPONENTS_VIEW;
    compRef: any;
    parentForm: any;
    @ViewChild('placeholder', { read: ViewContainerRef }) placeholder: ViewContainerRef;

    constructor(
        private compFactoryResolver: ComponentFactoryResolver,
        private widgetService: WidgetService,
        private render: Renderer2,
        private ele: ElementRef,
        private viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit() { }

    ngAfterViewInit() {

    }

    renderWidgetContainer() {
        this.compRef && this.compRef.destroy()
        if (this._widget) {
            const component = this.componentMap[this._widget.type];
            if (component) {
                const compFactory = this.compFactoryResolver.resolveComponentFactory(component);
                this.compRef = this.placeholder.createComponent(compFactory);
                this._widget.parentForm = this.parentForm;
                this.compRef.instance.widget = this._widget;
                this.widgetService.addFreeWidgetStream.next(this._widget);
            }
        }
    }

    ngOnDestroy() {
        this.compRef && this.compRef.destroy()
    }

    ngOnChanges() {
        this.renderWidgetContainer();
    }

    removeWidget(e) {
        this.widgetService.removeWidget(e)
    }
}
