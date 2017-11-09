import {
    Component, OnInit, Input,
    ViewChild, ViewContainerRef,
    ComponentFactoryResolver, ElementRef,
    ViewEncapsulation, AfterViewInit, OnDestroy,
    OnChanges, Renderer2, HostListener, HostBinding
} from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { COMPONENTS_VIEW } from '../../components';
import { WidgetService } from '../../../share/services';
import { Subject } from 'rxjs/Subject';

import "rxjs/add/operator/last";

@Component({
    selector: 'free-widget-view',
    templateUrl: './free-widget-view.html',
    styleUrls: ['./free-widget-view.scss']
})
export class FreeWidgetView implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    @HostBinding('class.active') _active: boolean = false;
    @HostBinding('attr.draggable') _draggable: boolean = true;
    @HostBinding('style.background-color') _bgColor: string = '';

    onDragEnter: Subject<any> = new Subject();
    onDragLeave: Subject<any> = new Subject();

    // 经过
    @HostListener('dragover', ['$event'])
    dragover(evt: any) {
        evt.preventDefault();
    }

    @HostListener('drop', ['$event'])
    drop(evt: any) {
        let code = evt.dataTransfer.getData('Text');
    }

    // 结束
    @HostListener('dragend', ['$event'])
    dragend(evt: any) {
        console.log(this.service.widget);
    }
    // 开始
    @HostListener('dragstart', ['$event'])
    dragstart(evt: any) {
        evt.dataTransfer.effectAllowed = "move";
        this.service.setData(this._widget);
    }


    @HostListener('mouseover', ['$event'])
    mouseover(evt: any) {
        // 鼠标移动到改元素时 改变设置
        this.service.setCurrentWidget(this._widget);
        evt.stopPropagation();
    }

    @HostListener('mouseout', ['$event'])
    mouseout(evt: any) {
        // 鼠标移动到改元素时 改变设置
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
    service: WidgetService;
    constructor(
        private compFactoryResolver: ComponentFactoryResolver,
        private render: Renderer2,
        private ele: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private widgetService: WidgetService
    ) { 
        this.service = this.widgetService.getWidgetInstance();
    }

    ngOnInit() { 
        console.log(this._widget.code);
    }

    ngAfterViewInit() {
        this.renderWidgetContainer();
    }

    removeWidget(e: any) {
        this.service.removeWidget(this._widget);
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

    ngOnChanges() {}
}

