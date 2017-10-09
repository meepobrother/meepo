import {
    Component, OnInit, Input,
    ViewChild, ViewContainerRef,
    ComponentFactoryResolver, ElementRef,
    ViewEncapsulation, AfterViewInit, OnDestroy,
    OnChanges, Renderer2, HostListener, HostBinding
} from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { COMPONENTS_VIEW } from '../../components';
import { WidgetService } from '../../services';
@Component({
    selector: 'free-widget-view',
    templateUrl: './free-widget-view.html',
    styleUrls: ['./free-widget-view.scss']
})
export class FreeWidgetView implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    @HostBinding('class.active') _active: boolean = false;
    @HostListener('mouseover', ['$event'])
    mouseover(evt: any) {
        // 鼠标移动到改元素时 改变设置
        this._active = true;
        this.service.setCurrentWidget(this._widget);
        evt.stopPropagation();
    }

    @HostListener('mouseout', ['$event'])
    mouseout(evt: any) {
        // 鼠标移动到改元素时 改变设置
        this._active = false;
        evt.stopPropagation();
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
        private render: Renderer2,
        private ele: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private service: WidgetService
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
            }
        }
    }

    ngOnDestroy() {
        this.compRef && this.compRef.destroy()
    }

    ngOnChanges() {
        this.renderWidgetContainer();
    }
}

