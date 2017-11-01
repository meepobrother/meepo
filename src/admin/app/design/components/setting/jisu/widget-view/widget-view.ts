import { Component, OnInit, HostBinding, Input, ComponentFactoryResolver, ElementRef, ViewChild } from '@angular/core';
declare const jQuery: any;
import { WIDGETS, COMPONENTS_VIEW } from '../../../index';
@Component({
    selector: 'widget-view',
    templateUrl: './widget-view.html',
    styleUrls: ['./widget-view.scss']
})
export class WidgetView implements OnInit {
    @Input() widget: any;
    @HostBinding('class.ele-container') _container: boolean = true;

    parentForm: any;
    compRef: any;
    @ViewChild('placeholder') placeholder: any;
    el: any;

    constructor(
        public ele: ElementRef,
        public compFactoryResolver: ComponentFactoryResolver,
        public widgetService: WidgetService,
        public widgetSettingService: WidgetSettingService
    ) { 
        this.el = this.ele.nativeElement;
    }

    ngOnInit() { }

    ngAfterViewInit(){
        setTimeout(()=>{
            if(this.widget){
                var t = COMPONENTS_VIEW[this.widget.type];
                if (t) {
                    var n = this.compFactoryResolver.resolveComponentFactory(t);
                    this.compRef = this.placeholder.createComponent(n),
                    this.widget.parentForm = this.parentForm,
                    this.compRef.instance.widget = this.widget
                }
            }
        },0)
    }

    ngOnChanges(){
        this.widget.parentForm = this.parentForm
    }

    ngOnDestroy(){
        this.compRef && this.compRef.destroy()
    }

    removeWidget(e: any){
        const t = jQuery(e.target);
        this.widgetService.removeWidget(t.closest(".ele-container"))
    }
}