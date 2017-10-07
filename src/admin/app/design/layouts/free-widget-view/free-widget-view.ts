import {
    Component, OnInit, Input,
    ViewChild, ViewContainerRef,
    ComponentFactoryResolver, ElementRef
} from '@angular/core';
import { WidgetService } from '../../services';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
    selector: 'free-widget-view',
    templateUrl: './free-widget-view.html',
    styleUrls: ['./free-widget-view.scss']
})
export class FreeWidgetView implements OnInit {
    // 组件列表
    constructor(
        public widget: WidgetService
    ) { }

    ngOnInit() {

    }

    onClick(item: any){
        this.widget.setCurrentWidget(item);
    }
}

