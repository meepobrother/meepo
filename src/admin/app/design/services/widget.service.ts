import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ComponentPortal } from '@angular/cdk/portal';
import { Widget } from '../classes';
@Injectable()
export class WidgetService {

    private currentWidget: any = new Widget();
    setCurrentWidgetStream: Subject<any> = new Subject();
    removeWidgetStream: Subject<any> = new Subject();
    

    widget: any;

    appId: any;

    setAppId(id: any){
        this.appId = id;
    }

    setData(widget: any){
        this.widget = widget;
    }

    getAppId(){
        return this.appId;
    }

    removeWidget(widget: any){
        this.removeWidgetStream.next(widget);
    }

    setCurrentWidget(item: any) {
        this.currentWidget = item;
        this.setCurrentWidgetStream.next(this.currentWidget);
    }

    addItem(widget: any) {
        this.currentWidget.children.push(widget);
        this.setCurrentWidgetStream.next(this.currentWidget);
    }
}