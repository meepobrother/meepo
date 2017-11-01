import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ComponentPortal } from '@angular/cdk/portal';
import { Widget } from '../classes';

import { DataPerService } from './data-per.service';
declare const jQuery: any;
@Injectable()
export class WidgetService {

    private currentWidget: any = new Widget();
    setCurrentWidgetStream: Subject<any> = new Subject();
    removeWidgetStream: Subject<any> = new Subject();


    // jisu
    containers: any;
    addWidgetVesselStream: Subject<any> = new Subject();
    addFreeWidgetStream: Subject<any> = new Subject();
    setInvalidVesselStream: Subject<any> = new Subject();
    clearInvalidVesselStream: Subject<any> = new Subject();
    codeStream: Subject<any> = new Subject();
    curIndexStream: Subject<any> = new Subject();
    scrollToPageBottomStream: Subject<any> = new Subject();
    showElementsSettingStream: Subject<any> = new Subject();
    showPageSettingStream: Subject<any> = new Subject();
    constructor(
        public dataPerService: DataPerService
    ) {
        this.containers = ["static-vessel"];
    }

    getCurrentWidget() {
        return this.dataPerService.getCurrentWidget()
    }

    getWidgetList() {
        return this.dataPerService.getWidgetList()
    }

    getWidgetById(id: string) {
        return this.dataPerService.getWidgetById(id)
    }

    getCurrentPageWidgets(e: any) {
        return this.dataPerService.getCurrentPageWidgets(e)
    }

    setCurrentWidget(e: any) {
        this.dataPerService.setCurrentWidget(e)
    }

    addWidget(e, t, n, i) {
        this.dataPerService.addWidget(e, t, n, i)
    }

    removeWidget(e: any) {
        var t, n = jQuery(e), i = n.parent().closest(".ele-container");
        i.length && (t = i.attr("id")),
            this.dataPerService.removeWidget(n.attr("id"), t)
    }

    deleteWidget(e, t) {
        this.dataPerService.removeWidget(e, t)
    }

    widgetMoveFinish(e, t, n, i){
        var r = this;
        this.dataPerService.widgetMoveFinish(e, t, n, i);
        var o = this.getWidgetById(e).type;
        setTimeout(()=>{
            this.setInvalidVessel(o),
            this.clearInvalidVessel()
        }, 500);
    }

    widget: any;

    appId: any;

    setAppId(id: any) {
        this.appId = id;
    }

    setData(widget: any) {
        this.widget = widget;
    }

    getAppId() {
        return this.appId;
    }

    removeWidget(widget: any) {
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