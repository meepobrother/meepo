import {
    Component, OnInit, ViewChild,
    ViewContainerRef, Input, ComponentFactoryResolver
} from '@angular/core';

@Component({
    selector: 'layout-vessel-view',
    templateUrl: './layout-vessel-view',
    styleUrls: ['./layout-vessel-view.scss']
})
export class LayoutVesselView implements OnInit {
    @Input() widget: any;
    @Input() parentForm: any;
    @ViewChild('placeholder', { read: ViewContainerRef }) placeholder: ViewContainerRef;
    compRef: any;
    componentMap: any;

    constructor(
        private compFactoryResolver: ComponentFactoryResolver
    ) { }

    ngOnInit() { }

    ngOnChanges() {
        this.widget.parentForm = this.parentForm
    }

    ngOnDestroy() {
        this.compRef && this.compRef.destroy()
    }

    ngAfterViewInit() {
        setTimeout(() => {
            if (this.widget && this.widget.type) {
                const component = this.componentMap[this.widget.type];
                if (component) {
                    const comFactory = this.compFactoryResolver.resolveComponentFactory(component);
                    this.compRef = this.placeholder.createComponent(comFactory);
                    this.widget.parentForm = this.parentForm;
                    this.compRef.instance.instance = this.widget;
                }
            }
        }, 0);
    }

    removeWidget(e) {
        // var t = jQuery(e.target);
        // this.widgetService.removeWidget(t.closest(".ele-container"))
    }
}

