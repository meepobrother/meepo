import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ComponentPortal } from '@angular/cdk/portal';
import { Widget } from '../classes';
@Injectable()
export class WidgetService {
    list: Map<string, any> = new Map();
    currentWidget: any = new Widget();
    onChange: Subject<any> = new Subject();
    addFreeWidgetStream: Subject<any> = new Subject();
    

    get dates() {
        const results = [];
        this.list.forEach(res => {
            results.push(res);
        });
        return results;
    }

    removeWidget(id: string) {
        this.list.delete(id);
    }

    addWidget(id: string, res: any, widget: any) {
        this.list.set(id, { componentPortal: new ComponentPortal(res), widget: widget });
    }

    setCurrentWidget(item: any) {
        console.log('setCurrentWidget', item);
        this.currentWidget = item;
        console.log(item);
        this.onChange.next(this.currentWidget);
    }
}