import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ComponentPortal } from '@angular/cdk/portal';
import { Widget } from '../classes';
@Injectable()
export class WidgetService {

    private currentWidget: any = new Widget();
    setCurrentWidgetStream: Subject<any> = new Subject();

    setCurrentWidget(item: any) {
        this.currentWidget = item;
        this.setCurrentWidgetStream.next(this.currentWidget);
    }

    addItem(widget: any) {
        this.currentWidget.children.push(widget);
        this.setCurrentWidgetStream.next(this.currentWidget);
    }
}